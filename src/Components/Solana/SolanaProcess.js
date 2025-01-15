import { connectWallet } from "./SolanaHelper";
import BigNumber from "bignumber.js";
import { Connection, PublicKey, Transaction, SystemProgram, clusterApiUrl } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, getAccount, TOKEN_PROGRAM_ID, getMint } from '@solana/spl-token';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tokens, TokenAddress } from "../Constant/Constant";
import { getCurrentTokenPrice } from "../Constant/LivePrice";


let walletAddress = "";

/**
 * * Main Function to handle Solana transaction.
 * @param {String} selectedToken // Token name
 * @param {String} Address // Wallet address to send funds.
 * @param {INT} Amount // Amount in USD
 * @param {INT} PaymentConfirmations // Wait for No. of blocks confirmations. Default 2, NOT Using here
 * @returns {Bool} Payment Status
 */
// We are not using noOfBlockConformations for the Solana Blockchain. We are using the transaction state.
export async function makeSolanaPayment(selectedToken, Address, Amount, noOfBlockConformation) {

    let receiverAddress = Address.SOLANA;
    let phantomWalletInstance = await connectWallet();
    let connectedWalletAddress = phantomWalletInstance?.walletAddress;
    walletAddress = connectedWalletAddress;

    // Native transaction
    if (selectedToken === "SOL"){
        // Calculate the live token price.
        let liveTokenPrice = await getCurrentTokenPrice('solana');
        liveTokenPrice = parseFloat(liveTokenPrice)
        let calculatedTokenPrice = parseFloat(Amount) / liveTokenPrice;

        let tokenTransferStatus = sendToken(receiverAddress, calculatedTokenPrice) // For native
        return tokenTransferStatus; 
    }
    else {

        let tokenAddress = TokenAddress["Solana"][selectedToken];
        let isTokenStable = Tokens[selectedToken].type;
        // Passing the amount as It is. As we are directly accpeting the stable coin to USD
        if (isTokenStable == 'stable') {
            let tokenTransferStatus = sendToken(receiverAddress, Amount, tokenAddress) // For SPL tokens
            return tokenTransferStatus; 
        }
        else {   
            let liveTokenPrice = await (getCurrentTokenPrice('solana'));
            liveTokenPrice = parseFloat(liveTokenPrice)
            let calculatedTokenPrice = parseFloat(Amount) / liveTokenPrice;
            let tokenTransferStatus = sendToken(receiverAddress, calculatedTokenPrice, tokenAddress) // For SPL tokens
            return tokenTransferStatus; 
        }
    }
}

/**
 * 
 * @param {String} _receiverAddress 
 * @param {Int} _amount 
 * @param {String} _tokenAddress 
 * @returns {Bool} Payment Status
 */
const sendToken = async (_receiverAddress, _amount, _tokenAddress) => {
    if (!walletAddress) return alert('Connect your wallet first!');
    let decimal = 9; // Default decimal value is 9 for Solana.

    try {
      const senderPublicKey = new PublicKey(walletAddress);
      const receiverPublicKey = new PublicKey(_receiverAddress);
      const tx = new Transaction();

      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed'); // Fot testing on Devnet      
    //   const MAINNET_RPC_URL = 'https://solana-rpc.publicnode.com';
    //   const connection = new Connection(MAINNET_RPC_URL, 'confirmed');

      
    //   Handling the SPL token transactions.
      if (_tokenAddress) {
          const tokenPublicKey = new PublicKey(_tokenAddress);
          const receiverTokenAddress = await getAssociatedTokenAddress(tokenPublicKey, receiverPublicKey);
        // SPL Token Transfer
        const senderTokenAddress = await getAssociatedTokenAddress(tokenPublicKey, senderPublicKey);

        const senderAccount = await getAccount(connection, senderTokenAddress);
        const mintInfo = await getMint(connection, tokenPublicKey);
        decimal = mintInfo.decimals;

        let _amountBigNumber = BigNumber(Math.floor((parseFloat(_amount) * (10 ** decimal))))

        if (senderAccount.amount <= _amountBigNumber) {
            toast.error('Insufficient token balance.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
            return false;
        }

        const transferInstruction = createTransferInstruction(
          senderTokenAddress,
          receiverTokenAddress,
          senderPublicKey,
          _amountBigNumber,
          [],
          TOKEN_PROGRAM_ID
        );
        tx.add(transferInstruction);
      } else {
        // Native SOL Transfer
        let _calculatedAmount = BigNumber(Math.floor((parseFloat(_amount) * (10 ** 9))))
        const transferInstruction = SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: receiverPublicKey,
            lamports: _calculatedAmount
        });
        tx.add(transferInstruction);
      }
      
      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = senderPublicKey;

      const signedTransaction = await window.solana.signTransaction(tx);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());

      // Wait for 4 block confirmations
      await connection.confirmTransaction(signature, 'finalized');
      const confirmation = await connection.getTransaction(signature, { commitment: 'finalized' });

    //   Check the token transfer.
    if (_tokenAddress) {
        let amountCheckStatus = await checkSPLTokenTransfer(connection, signature, _amount, decimal);
        return amountCheckStatus
    }
    else {
        let amountCheckStatus = await checkNativeTokenTransfer(connection, signature, _amount);
        return amountCheckStatus;   
        }
    } catch (err) {
      console.error('Error sending transaction:', err);
      toast.error('Transaction failed!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
  };


// Verify the actual token transfer is correct or not for SPL tokens.
// returns {Boolean}
const checkSPLTokenTransfer = async (connection, signature, amount, tokenDecimals) => {
    try {
      const transactionDetails = await connection.getParsedTransaction(signature, 'finalized');
      if (!transactionDetails) throw new Error('Transaction not found!');
  
      const instructions = transactionDetails.transaction.message.instructions;
      // Look for a transfer instruction from the SPL Token Program
      const transferInstruction = instructions.find((inst) =>
        inst.programId.equals(TOKEN_PROGRAM_ID)
      );
  
      if (transferInstruction) {
        const parsedData = transferInstruction.parsed.info;
        const transferredAmount = parsedData.amount; // Convert token units to human-readable format
  
        if (parseFloat(transferredAmount) <= parseFloat(BigNumber(Math.floor((parseFloat(amount) * (10 ** tokenDecimals)))))) {
          toast.success('Payment done successfully:)', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          return true;
        } else {
        //   console.log('SPL Token transfer amount mismatch!');
        toast.error('Something went wrong', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          return false;
        }
      } else {
        // console.log('SPL Token transfer instruction not found!');
        toast.error('Unable to process payment\n Please try again ', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return false;
      }
    } catch (err) {
    //   console.error('Error verifying SPL Token transfer:', err);
      toast.error('Transaction failed to be processed', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
  };
  
// Verify the actual token transfer is correct or not for Solana naitve token.
// returns {Boolean}
const checkNativeTokenTransfer = async (connection, signature, amount) => {
    try {
      const transactionDetails = await connection.getParsedTransaction(signature, 'finalized');
      if (!transactionDetails) throw new Error('Transaction not found!');
  
      const instructions = transactionDetails.transaction.message.instructions;
  
      // Look for a transfer instruction from the SystemProgram
      const transferInstruction = instructions.find((inst) =>
        inst.programId.equals(SystemProgram.programId)
      );
  
      if (transferInstruction) {
        const parsedData = transferInstruction.parsed.info;
        const transferredAmount = parsedData.lamports; // Convert lamports to SOL
  
        
        if (parseFloat(transferredAmount) <= parseFloat(BigNumber(Math.floor((parseFloat(amount) * (10 ** 9)))))) {
        // if (transferredAmount === parseFloat(amount)) {
          toast.success('Payment done successfully:)', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          return true;
        } else {
          toast.error('Something went wrong', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          return false;
        }
      } else {
        toast.error('Unable to process payment\n Please try again ', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return false;
      }
    } catch (err) {
    //   console.error('Error verifying Native SOL transfer:', err);
      toast.error('Transaction failed to be processed', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
  };
