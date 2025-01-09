import { connectWallet } from "./StarknetHelper";
import { Contract, cairo ,CallData,  } from "starknet";
import BigNumber from "bignumber.js";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { STARKNET_ERC20_ABI, TokenAddress, Tokens } from "../Constant/Constant";
import { getCurrentTokenPrice } from "../Constant/LivePrice";

/**
 * * Main Function to handle Starknet transaction.
 * @param {String} Token // Token name
 * @param {String} Address_  // Wallet address to send funds.
 * @param {INT} Amount // Amount in USD
 * @param {INT} PaymentConfirmation // Wait for No. of blocks confirmations. Default 2
 * @returns 
 */
export async function makeStarknetPayment(Token, Address_, Amount, PaymentConfirmation=2 ) {

    let Address = Address_.STARKNET;
    if(Address.length === 66) { // Replaces 0x0.. to 0x..
      Address = Address.slice(3);
      Address = "0x"+ Address
    }
    let connectVar = await connectWallet();
    const walletId = connectVar?.id
    const userAddress = connectVar?.account?.address;
    const provider = connectVar.provider
    const signer = connectVar.account.signer
    let tokenAddress = TokenAddress["Starknet"][Token];
    let tokenDetails = Tokens[Token];

    if (tokenDetails.type === "unstable"){
      let liveTokenPrice = await getCurrentTokenPrice(tokenDetails.dname);
      let amount = Amount / liveTokenPrice
      let tx = await requestERC20Payment(amount, tokenAddress, Address, userAddress, provider, signer, PaymentConfirmation, connectVar)
      return tx;
      
    }
    else {
      let tx = await requestERC20Payment(Amount, tokenAddress, Address, userAddress, provider, signer, PaymentConfirmation, connectVar)
      return tx;
    }
}

/**
 * 
 * @param {INT} _tokenAmount // Amount of token.
 * @param {String} _tokenAddress // Token address
 * @param {String} _toAddress // Wallet address to transfer funds.
 * @param {String} _fromAddress // Connected wallet address.
 * @param {Object} _provider // Provider object from wallet.
 * @param {Object} _signer // Signer object from wallet.
 * @param {INT} _blockConfirmations // Wait for No. of blocks confirmations. Default 2.
 * @param {Object} _starknetObj // Starknet Object from wallet extension.
 * @returns 
 */
const requestERC20Payment = async(_tokenAmount, _tokenAddress, _toAddress, _fromAddress, _provider, _signer,_blockConfirmations, _starknetObj) => {
  
  let provider = _provider;
  const contractInstance = new Contract(STARKNET_ERC20_ABI, _tokenAddress, provider)
  let decimal = await contractInstance.decimals()
  decimal = decimal.decimals.toString();
  
  let tokenAmount = BigNumber(Math.floor((parseFloat(_tokenAmount) * (10 ** decimal))))
  
  try {

    let transferToken = await _starknetObj.account.execute({
      contractAddress: _tokenAddress, // ERC20 token addrss
      entrypoint: 'transfer',
      calldata: CallData.compile({
        recipient: _toAddress, // Receiver's address
        amount: cairo.uint256(parseInt(tokenAmount))
      })
    })
    
    let status = await provider.waitForTransaction(transferToken.transaction_hash);
    let finalStatus = status.finality_status;
    if(finalStatus === "ACCEPTED_ON_L2") {
      let Receipt =  await provider.getTransactionReceipt(transferToken.transaction_hash)
      let update = await verifyTransaction(transferToken.transaction_hash, tokenAmount, provider, _toAddress, _fromAddress, _tokenAddress, decimal);
      if (update){
        toast.success('Token transferred successfully', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return true;
      }
      else {
        toast.error('Unable to make payment! \n No payment found on L2', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return false;
      }
    }
    else {
      toast.error('Unable to make payment! \n Error while accepting transfer at L2', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
    
  } catch (error) {
    console.log("error: " + error)
    toast.error('Unable to make payment!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
    return false;
  }
}


/**
 * 
 * @param {String} _txHash // Transaction hash after transaction.
 * @param {String} _latestAmount // Amount of funds transferred.
 * @param {Object} _provider // Provider object from wallet.
 * @param {String} _toAddress // Wallet address to transfer funds.
 * @param {String} _fromAddress // Connected wallet address.
 * @param {String} _tokenAddress // Token address
 * @param {INT} _decimal // Token decimals.
 * @returns 
 */
const verifyTransaction = async(_txHash, _latestAmount,_provider, _toAddress, _fromAddress, _tokenAddress, _decimal) => {

  let verificationStatue = false;
  const provider = _provider;
  let Receipt =  await provider.getTransactionReceipt(_txHash)
  let tx = Receipt.events; 

  let tokenAddressOfTransferToken = tx[0].from_address; // ERC20_Token Address
  let tokenTransferedFromAddress = tx[0].data[0] // userAddress
  let tokenTransferedToAddress = tx[0].data[1] // It should be our address.
  let tokenTransferedAmount = tx[0].data[2] // Amount
  tokenTransferedAmount = parseInt(tokenTransferedAmount.toString(16))
  tokenTransferedAmount = tokenTransferedAmount * _decimal
  let _amount = parseInt(_latestAmount.toString())
  if(tokenTransferedAmount >= _amount && 
    tokenTransferedToAddress.toLowerCase() === _toAddress.toLowerCase() && 
    tokenTransferedFromAddress.toLowerCase() === _fromAddress.toLowerCase() && 
    tokenAddressOfTransferToken.toLowerCase() === (_tokenAddress).toLowerCase()){
      verificationStatue = true
  }     
  return verificationStatue
}
