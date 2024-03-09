import React, { useState } from "react";
import axios from 'axios'
import { Contract, Provider, cairo ,CallData, uint256 } from "starknet";
import { connectWallet } from "./StarknetFunctions/ConnectWallet";
import { STARKNET_ERC20_ABI, StarknetTokenAddress,} from "../Constants/StarknetConstant";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../CSS/StarknetComponent.css'
import resmiclogo from "../assets/resmiclogo.png";

/**
 * 
 * @param {String} Address Wallet Address that will be receiving the funds
 * @param {Array} Tokens Array of tokens to accept funds in
 * @param {Number} Amount Amount in USD
 * @param {bool} setPaymentStatus returns boolean indicating payment status
 * @param {CSS} Style CSS component for the button 
 */
function StarkNetConnect
({ Address, 
    Tokens, 
    Amount , 
    setPaymentStatus,
    Style = {displayName: "Make Payment", 
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"},
  }) {

    const [selectedToken, setSelectedToken] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [starknetObject, setStarknetObject] = useState();
    const [userAddress, setUserAddress] = useState();
    const [providerUrl, setProviderUrl] = useState();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentAmount, setCurrentAmount] = useState();
    const [currentTokenPrice, setCurrentTokenPrice] = useState(""); // To display the conversion rate for token.
    const [btnName, setBtnName] = useState("Make Payment");

    // Select Token dropdown selection menu.
    let selectToken = Tokens.map((token) => {
      return (
        <>
          <option value="" disabled selected hidden>Select Token</option>
          <option key={token?.name} value={token?.name}>{" "}{token?.name}</option>    
        </>
      );
    });

    /**
     * Connect dApp to the StarkNet available Wallet.
     */
    const connectStarknetWallet = async () => {
        setIsLoading(true);
        let connect = await connectWallet();
        setStarknetObject(connect);
        setUserAddress(connect?.account?.address);
        // setProviderUrl(connect?.provider?.gatewayUrl)
        setProviderUrl(connect?.account?.provider?.baseUrl);
        setIsConnected(true);
        setIsLoading(false);
        // console.log(connect?.account?.address);
        // console.log(connect?.provider);
    };

    /**
     * Fetches current market price of token.
     * @param {String} _token Token name, e.b. "Ethereum"
     * @returns {Number} Returns current USD value of input token.
     */
    const getCurrentTokenPrice = async (_token) => {
        let token = _token.toLowerCase()
        try {
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
            let fetchUrl = await  axios.get(url)
            let currentUsdPrice = fetchUrl.data[token]['usd']
            // console.log(currentUsdPrice)
            return currentUsdPrice
            
        } catch (error) {
            // alert("Error while getting token price")
            toast.error('Unable to fetch live price!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
            console.log(error.message)
        }
    }

    /**
     * 
     * @param {Number} latestAmount Calculated current amount of token
     * @param {String} _selectedToken ERC20 token address  
     */
    const requestERC20Payment = async(latestAmount, _selectedToken) => {
      setIsLoading(true);  
      // console.log("selectedToken", StarknetTokenAddress[_selectedToken])
        const provider = new Provider({ sequencer: { baseUrl: providerUrl } });
        const contractInstance = new Contract( STARKNET_ERC20_ABI,StarknetTokenAddress[_selectedToken],provider);
        let _contractAddress = StarknetTokenAddress[_selectedToken];
        let decimal = await contractInstance.decimals()
        decimal = decimal.decimals.toString();
        let _latestAmount = latestAmount * (10 ** parseInt(decimal));
        setCurrentAmount(_latestAmount)
  
        try {
          // Two functionality in a transaction.
          // 1. The token will be approved by the user
          // 2. The actual payment will be completed.
          setBtnName("Approving ...")    
            let approveTokens = await starknetObject.account.execute({
                    contractAddress: _contractAddress, // ERC20 token addrss(ETH)
                    entrypoint: 'approve',
                    calldata: CallData.compile({
                        recipient: userAddress,
                        // amount: cairo.uint256(_latestAmount)
                        amount: cairo.uint256(parseInt( _latestAmount.toString()))
                    })
                })
            await provider.waitForTransaction(approveTokens.transaction_hash);
            console.log("approveTokens", approveTokens)
            console.log("approveTokens.transaction_hash", approveTokens.transaction_hash)
            // alert("Token approved!");
            toast.success('Token approved', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
            setBtnName("Make payment");
            let transferToken = await starknetObject.account.execute({
              contractAddress: _contractAddress, // ERC20 token addrss(ETH)
              entrypoint: 'transfer',
              calldata: CallData.compile({
                recipient: Address, // Receiver's address
                amount: cairo.uint256(parseInt( _latestAmount.toString()))
              })
            })
            await provider.waitForTransaction(transferToken.transaction_hash);
            await verifyTransaction(transferToken.transaction_hash, _latestAmount)
            // alert("Token transferred successfully :)");
            toast.success('Token transferred successfully', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
            setBtnName("Payment Done");
            setPaymentStatus(true);
            setIsLoading(false);
            setIsPopupOpen(false);
          
        } catch (error) {
          console.log(error)
          // alert("Unable to make payment!")
          toast.error('Unable to make payment!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        }
    }

    /**
     * 
     * @param {String} _txHash Transaction hash after the payment.
     * @param {Number} _latestAmount Amount of tokens calculated at current rate.
     * @returns 
     */
    const verifyTransaction = async(_txHash, _latestAmount) => {

      let verificationStatue = false;
      const provider = new Provider({ sequencer: { baseUrl: providerUrl } });
      const contractInstance = new Contract( STARKNET_ERC20_ABI,StarknetTokenAddress[selectedToken?.name],provider);
      let Receipt =  await provider.getTransactionReceipt(_txHash)
      let tx = Receipt.events; 

      let tokenAddressOfTransferToken = tx[0].from_address; // ERC20_Token Address
      let tokenTransferedFromAddress = tx[0].data[0] // userAddress
      let tokenTransferedToAddress = tx[0].data[1] // It should be our address.
      let tokenTransferedAmount = tx[0].data[2] // Amount
      tokenTransferedAmount = parseInt(tokenTransferedAmount.toString(16))
      let _amount = parseInt(_latestAmount.toString())
      if(tokenTransferedAmount >=   _amount && 
        tokenTransferedToAddress.toLowerCase() === Address.toLowerCase() && 
        tokenTransferedFromAddress.toLowerCase() === userAddress.toLowerCase() && 
        tokenAddressOfTransferToken.toLowerCase() === (StarknetTokenAddress[selectedToken?.name]).toLowerCase()){
          verificationStatue = true
      }     
      return verificationStatue
    }

    /**
     * Super function to call all the functions in sync.
     */
    const makePayment = async () => {
      if ((selectedToken?.name == null)) {
        // alert("Please select the payment mode")
        toast.warning('Please select the payment mode', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      }
      else {
        await connectStarknetWallet();
        setBtnName(`Pay ${selectedToken?.name}`)
        if(isConnected){
            if (selectedToken?.name === 'stable'){
              setCurrentAmount(Amount)
              requestERC20Payment(Amount, selectedToken?.name);
            } 
            else {
                let latestPrice = await getCurrentTokenPrice(selectedToken?.name);
                let latestAmount = (Amount / latestPrice );
                requestERC20Payment(latestAmount, selectedToken?.name);   
            }
        }
        
        else {
            await connectStarknetWallet();
        }

      }
    };

    /**
     * Helper functions.
     */
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
          setIsPopupOpen(false);
          setIsLoading(!isLoading);
    };
    const handelSelectToken = async (e) => {
        const filteredArray = Tokens.filter(obj => obj.name === e.target.value);
        const token = filteredArray[0];
        let tokenPrice='1';
        if(token.type !=='stable')tokenPrice = await getCurrentTokenPrice(token.name);
        setSelectedToken(token);
        setCurrentTokenPrice("1 " + token.name + " = $ " + tokenPrice);
        // console.log("token", token)
    };

  return (
    <>
      <button style={Style} onClick={handleOpenPopup}>{Style?.displayName}</button>
      {/* <button onClick={handleOpenPopup}>Make Payment</button> */}
      <div>
{/* handelSelectToken */}
        {/* Popup */}
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup-content">
            <div className="resmic-logo">
                <img src={resmiclogo} alt="" />
                <span className="close" onClick={handleClosePopup}>
                  &times;
                </span>
            </div>
            <div className="modal-contents">
                <div className="inputs">
                  <div className="popup-heading">
                    <span>Pay amount</span>

                    <div className="amount">${Amount.toFixed(2)}</div>
                  </div>

                  <div className="inputGroup">
                    <div className="inputHeading">
                      <span>Token</span>
                    </div>
                    <select
                      onChange={(e) => {
                        handelSelectToken(e);
                      }}
                      name="Tokens"
                      id=""
                    >
                      {" "}
                      {selectToken}{" "}
                    </select>
                  </div>
                  {/* <div className="live-token-price">{currentTokenPrice}</div> */}
                  <div className="live-token-price">{currentTokenPrice}</div>
                  <div className="inputGroup">
                    <button onClick={makePayment}>
                      {!isLoading && btnName}
                      {isLoading &&
                        <div class="spinner">
                          <div class="bar1"></div>
                          <div class="bar2"></div>
                          <div class="bar3"></div>
                          <div class="bar4"></div>
                          <div class="bar5"></div>
                          <div class="bar6"></div>
                          <div class="bar7"></div>
                          <div class="bar8"></div>
                          <div class="bar9"></div>
                          <div class="bar10"></div>
                          <div class="bar11"></div>
                          <div class="bar12"></div>
                        </div>
                      }
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StarkNetConnect;

