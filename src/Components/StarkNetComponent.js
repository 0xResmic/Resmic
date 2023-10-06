import React, { useState } from "react";
import axios from 'axios'
import { Contract, Provider, cairo ,CallData, uint256 } from "starknet";
import { InvokeTransactionReceiptResponse } from "starknet";

import { connectWallet } from "./StarknetFunctions/ConnectWallet";
import {
  STARKNET_ERC20_ABI,
  StarknetTokenAddress,
} from "../Constants/StarknetConstat";

import hex2ascii from "hex2ascii";

function StarkNetComponent({ Address, Tokens, Amount }) {
    const [selectedToken, setSelectedToken] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [starknetObject, setStarknetObject] = useState();
    const [userAddress, setUserAddress] = useState();
    const [providerUrl, setProviderUrl] = useState();
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [currentAmount, setCurrentAmount] = useState();

    const [btnName, setBtnName] = useState("Make Payment");

    let selectToken = Tokens.map((tokens) => {
      return (
        <>
          <option value="" disabled selected hidden>
            Select Token
          </option>
          <option key={tokens} value={tokens}>
            {" "}
            {tokens}
          </option>
          
        </>
      );
    });

    const getToken = (e) => {
        setSelectedToken(e.target.value);
    };

    const connectStarknetWallet = async () => {
        let connect = await connectWallet();
        setStarknetObject(connect);
        setUserAddress(connect?.account?.address);
        // setProviderUrl(connect?.provider?.gatewayUrl)
        setProviderUrl(connect?.provider?.baseUrl);
        setIsConnected(true);
        console.log(connect?.account?.address);
        console.log(connect?.provider);
    };

    const getCurrentTokenPrice = async (_token) => {
        let token = _token.toLowerCase()
        try {
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
            let fetchUrl = await  axios.get(url)
            let currentUsdPrice = fetchUrl.data[token]['usd']
            console.log(currentUsdPrice)
            return currentUsdPrice
            
        } catch (error) {
            alert("Error while getting token price")
            console.log(error.message)
        }
    }

    const makePayment = async () => {

      if ((selectedToken == null)) {
        alert("Please select the payment mode")
      }

      else {
        await connectStarknetWallet();
        setBtnName(`Pay ${selectedToken}`)
        //  approveTokens ;

        if(isConnected){

            if ( selectedToken === "USDT" || selectedToken === "USDC" || selectedToken === "DAI" || selectedToken === "GETH"){
                setCurrentAmount(Amount)
                requestERC20Payment(Amount, selectedToken);
            } 
              
            else {
                let latestPrice = await getCurrentTokenPrice(selectedToken)
                let latestAmount = (Amount / latestPrice )
                requestERC20Payment(latestAmount, selectedToken)   
            }
        }
        
        else {
            await connectStarknetWallet();
        }

      }
    };

    const requestERC20Payment = async(latestAmount, selectedToken) => {
        console.log("selectedToken", StarknetTokenAddress[selectedToken])
        const provider = new Provider({ sequencer: { baseUrl: providerUrl } });
        const contractInstance = new Contract( STARKNET_ERC20_ABI,StarknetTokenAddress[selectedToken],provider);
        let _contractAddress = StarknetTokenAddress[selectedToken];
        
        let decimal = await contractInstance.decimals()
        decimal = parseInt(decimal.toString(16))
        let _latestAmount = latestAmount * 10 ** decimal;
        setCurrentAmount(_latestAmount)
        console.log("_latestAmount", typeof(latestAmount))
        console.log("cairo.uint256(parseInt(latestAmount))", cairo.uint256(_latestAmount))
        
        try {

          setBtnName("Approving ...")    
            // // let tokensToSend = amountToSend * 10**18; // sending 0.1 ETH
            let approveTokens = await starknetObject.account.execute({
                    contractAddress: _contractAddress, // ERC20 token addrss(ETH)
                    entrypoint: 'approve',
                    calldata: CallData.compile({
                        recipient: userAddress,
                        amount: cairo.uint256(_latestAmount)
                    })
                })
            await provider.waitForTransaction(approveTokens.transaction_hash);
            console.log("approveTokens", approveTokens)
            console.log("approveTokens.transaction_hash", approveTokens.transaction_hash)
            alert("Token approved!");
            setBtnName("Make payment");
            let transferToken = await starknetObject.account.execute({
              contractAddress: _contractAddress, // ERC20 token addrss(ETH)
              entrypoint: 'transfer',
              calldata: CallData.compile({
                recipient: Address, // Receiver's address
                amount: cairo.uint256(parseInt(latestAmount))
              })
            })
            
            await provider.waitForTransaction(transferToken.transaction_hash);
            await verifyTransaction(transferToken.transaction_hash)
            alert("Token transferred successfully :)");
            setBtnName("Payment Done");
          
        } catch (error) {
          console.log(error)
          alert("Unable to make payment!")
        }
    }

    const verifyTransaction = async(_txHash) => {

      let verificationStatue = false;
      const provider = new Provider({ sequencer: { baseUrl: providerUrl } });
      const contractInstance = new Contract( STARKNET_ERC20_ABI,StarknetTokenAddress[selectedToken],provider);
      let Receipt =  await provider.getTransactionReceipt(_txHash)
      let tx = Receipt.events; 

      let tokenAddressOfTransferToken = tx[0].from_address; // ERC20_Token Address
      let tokenTransferedFromAddress = tx[0].data[0] // userAddress
      let tokenTransferedToAddress = tx[0].data[1] // It should be our address.
      let tokenTransferedAmount = tx[0].data[2] // Amount
      tokenTransferedAmount = parseInt(tokenTransferedAmount.toString(16))
      let _amount = parseFloat(currentAmount)
      console.log("_amount", _amount)
      
      if(parseInt(tokenTransferedAmount) >=   _amount && tokenTransferedToAddress.toLowerCase() === Address.toLowerCase() && tokenTransferedFromAddress.toLowerCase() === userAddress.toLowerCase() && tokenAddressOfTransferToken.toLowerCase() === (StarknetTokenAddress[selectedToken]).toLowerCase()){

        verificationStatue = true
        console.log("Inside")
          
      }

      // let p = hex2ascii(tokenTransferedAmount) //
      // console.log("tokenTransferedAmount",p);
      
      console.log("verificationStatue", verificationStatue)
      return verificationStatue

    }


    async function test() {
      // const block = await Provider.getBlock("latest"); // <- Get latest block
        const provider = new Provider({ sequencer: { baseUrl: providerUrl } });

        let ETH_ContractAddress ="0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7";
        const contractInstance = new Contract( STARKNET_ERC20_ABI,ETH_ContractAddress,provider);
        let tokenName = await contractInstance.name();

        let toHex = tokenName.name.toString(16);
        let name = hex2ascii(toHex);
        console.log(name);
    }

    async function test2() {
      console.log("Test 2")
      verifyTransaction("0x38187e7fbe81c64d5378d180f2370c6d36d0cda3eec91e3d276d6ee6807281a")
    }

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
          setIsPopupOpen(false);
          setIsLoading(!isLoading);
    };

  return (
    <>
      <h1>Starknet Component</h1>

      <br />
      <br />
      <br />

      <button onClick={makePayment}>Make Payment</button>
      <br />
      <br />
      <br />
      <button onClick={test}>Test Test</button>
      <button onClick={test2}>Test 2 2 </button>

      <div>
        {/* Popup */}
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup-content">
              <div className="modal-contents">
                <span className="close" onClick={handleClosePopup}>
                  &times;
                </span>

                <div className="inputs">
                  <h2>Make payment</h2>

                  <select onChange={getToken} name="Tokens" id="">
                    {" "}
                    {selectToken}{" "}
                  </select>

                  {/* <button onClick={test}>Test</button> */}
                  <br />
                  <br />
                  <br />
                  {/* <button on onClick={test}>Test Btn</button> */}
                  <button onClick={makePayment}>{btnName}</button>
                  <button onClick={test2}>Test 2 2 </button>

                  {isLoading ? (
                    // Display the spinner when isLoading is true
                    <div className="spinner">
                      <div>
                        <span class="loader"></span>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StarkNetComponent;

