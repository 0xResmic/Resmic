import React, { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { ERC20_ABI, TokenAddress } from "../Constants/Constants";
import resmiclogo from "../assets/resmiclogo.png";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  connectWallet,
  getProvider,
  getSigner,
  switchNetwork,
} from "./EVMFunctions/ConnectMeta";
import "../CSS/PaymentPopUp.css";
import "../CSS/Loader.css";
import "../CSS/EVMComponent.css";

/**
 * Component function receives input from the user and make the transaction
 * @param {String} Address // Address where funds will be get transferred
 * @param {Array} Tokens  // Array of tokens user want to accept
 * @param {Array} Chain  // Array of blockchain user want to accept
 * @param {INT} Amount  // Amount to accept in USD
 * @param {Style} CSS  // Customise CSS for buttons.
 * @param {bool} setPaymentStatus // Returns the payment completion status of the tx.  // Customise CSS for buttons.
 * @param {INT} noOfBlockConformation // No. of Block Conformation to verify the transaction
 * @returns React componen
 */
function EVMConnect({
  Address,
  Tokens,
  Chains,
  Amount,
  Style = {displayName: "Make Payment", 
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"},
  setPaymentStatus,
  noOfBlockConformation = 3,
}) {
  const [selectedToken, setSelectedToken] = useState(null);
  const [selectedChain, setSelectedChain] = useState(null);
  const [userAddress, setUserAddress] = useState();
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [currentTokenPrice, setCurrentTokenPrice] = useState(""); // To display the conversion rate for token.
  const [isConnected, setIsConnected] = useState(false);
  const [btnName, setBtnName] = useState("Connect Wallet");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Select Blockchain dropdown selection menu.
  let selectChain = Chains.map((chain) => {
    return (
      <>
        <option value="" disabled selected hidden>
          Select Blockchain
        </option>
        <option key={chain?.name} value={chain?.name}>
          {" "}
          <img src={resmiclogo} alt="" />
          {chain?.name}{" "}
        </option>
      </>
    );
  });
  // Select Token dropdown selection menu.
  let selectToken = Tokens.map((token) => {
    return (
      <>
        <option value="" disabled selected hidden>
          Select Token
        </option>
        <option key={token?.dname} value={token?.dname}>
          {" "}
          {token?.dname}
        </option>
      </>
    );
  });

  /**
   * Reterivies the current price in USD from Coingecko
   * @param {String} // string e.g. "Ethereum"
   * @return {Number} value in USD
   */
  const getCurrentTokenPrice = async (_token) => {
    let token = _token.toLowerCase();
    try {
      let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;
      let fetchUrl = await axios.get(url);
      let currentUsdPrice = fetchUrl.data[token]["usd"];
      // console.log(currentUsdPrice)
      return currentUsdPrice;
    } catch (error) {
      // alert("Error while getting token price");
      toast.error('Unable to fetch live price!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      console.log(error.message);
    }
  };

  /**
   * Connects user to Wallet {Metamask wallet}
   * Changes the Blockchain if required.
   */
  const connectWalletFunc = async () => {
    setBtnName("Connecting");
    setIsLoading(true);
    let connectFunc = await connectWallet(); // Calling connect function from Constant/ConnectMeta
    setUserAddress(connectFunc.account); // Returns the connected wallet address.
    setBtnName("Make Payment");
    setIsLoading(false);

    // if(connectFunc.chainId != getChainData[selectedChain]){ // connectFunc.chainId -> Returns the current connected chain
    if (connectFunc.chainId !== selectedChain.id) {
      // connectFunc.chainId -> Returns the current connected chain
      // console.log("Change network")
      setBtnName("Switching network");
      setIsLoading(true);
      await switchNetwork(selectedChain.id);
      setIsConnected(true);
      setIsLoading(false);
      setBtnName("Make Payment");
      return true;
    } else {
      // console.log("No need")
      setIsConnected(true);
      return true;
    }
  };

  /**
   * If user is selected with non-native token, function request the payment.
   * @param {INT} _amount
   * @param {String} _tokenAddress
   */
  const requestERC20Payment = async (_amount, _tokenAddress) => {
    setIsLoading(true);
    const signer = await getSigner();
    // setCurrentTokenPrice("Current Conversion rate: $" + _amount)

    try {
      /**
       * The ERC20 payment requires 2 transactions
       * 1. Approval of token
       * 2. Transafer of token
       */
      const contractInstance = new ethers.Contract(
        _tokenAddress,
        ERC20_ABI,
        signer
      );
      let decimals = await contractInstance.decimals();
      decimals = decimals.toString();

      const getApprove = await contractInstance.approve(
        userAddress,
        (_amount * 10 ** decimals).toString()
      );
      await getApprove.wait();
      // alert("Token approved successfully:)"); 
      toast.success('Token approved', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      let tx = await contractInstance.transferFrom(
        userAddress,
        Address,
        (_amount * 10 ** decimals).toString(),
        { gasLimit: 100000 }
        );
        await tx.wait();
        // console.log("tx.hash:--", tx.hash);
        
        await checkBlockConformations(tx.hash, decimals);
      } catch (error) {
        // alert("Something went wrong."); 
        toast.error('Something went wrong.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        console.log(error);
    }
  };

  /**
   * Function for native token transfers.
   * @param {INT/FLOAT} _amount // Amount in native token ().
   *
   */
  const nativeTokenPayment = async (_amount) => {
    const signer = await getSigner();
    let amount = _amount;
    // setCurrentTokenPrice("Current Conversion rate: $" + _amount)
    let slicedNum = amount.toFixed(10); // Rounding it to 10 digits.
    let amountInWei = ethers.utils.parseEther(slicedNum.toString()); // Converting the amount to WEI {Smallest amount of ETH (1 ETH = 10 ** 18)}

    try {
      // Transfer of funds to address
      const tx = await signer.sendTransaction({
        to: Address, // Funds will be received by the address
        value: amountInWei,
        // gasLimit: '0x5028',
        // maxPriorityFeePerGas: '0x3b9aca00',
        // maxFeePerGas: '0x2540be400',
      });
      await tx.wait();
      await checkBlockConformationsNative(tx.hash);
    } catch (error) {
      // alert("Something went wrong");
      toast.error('Something went wrong.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      console.log(error);
    }
  };

  /**
   * Function ckecks the block conformation of the payment on the blockchain for ERC20 token only.
   * The user will wait until the the transaction is confirmed until specified blocks.
   * @param {String} tx // Transaction hash after the payment.
   * @param {INT} decimals
   * @returns {Bool} returns the paymetn update.
   */
  const checkBlockConformations = async (tx, decimals) => {
    let provider = await getProvider();
    const confirmationsRequired = noOfBlockConformation;
    const receipt = await provider.waitForTransaction(
      tx,
      confirmationsRequired
    );

    // Checks the status of the transaction
    if (receipt.status === 1) {
      let actualTokenTransfer = await checkTokenTransfers(tx);
      if (actualTokenTransfer !== "0") {
        let _amount = parseFloat(actualTokenTransfer);
        if (_amount / (10 ** decimals).toString() >= Amount) {
          setIsPaymentCompleted(true);
          setPaymentStatus(true);
          // alert("Payment done successfully:)");
          toast.success('Payment done successfully.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          setIsPaymentCompleted(true);
          setPaymentStatus(true);
          setIsLoading(false);
          setIsPopupOpen(false);
          return true;
        } else {
          // alert("Something went wrong");
          toast.error('Something went wrong.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          // console.log("Not sufficient amount transferred: ");
          return false;
        }
      } else {
        // alert("Unable to process payment\n Please try again ");
        toast.error('Unable to process payment\n Please try again', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return false;
      }
    } else {
      // alert("Transaction failed to be processed");
      toast.error('Transaction failed to be processed', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
  };

  /**
   * Verifies the amount to token actually transfereed. ERC20 tokens
   * @param {String} transactionHash
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */
  const checkTokenTransfers = async (transactionHash) => {
    let provider = await getProvider();
    try {
      const transactionReceipt = await provider.getTransactionReceipt(
        transactionHash
      );
      if (transactionReceipt && transactionReceipt.status === 1) {
        const tokenContract = new ethers.Contract(
          TokenAddress[selectedChain?.name][selectedToken?.name],
          ERC20_ABI,
          provider
        );
        const filter = tokenContract.filters.Transfer(null, null, null);
        const events = await tokenContract.queryFilter(
          filter,
          transactionReceipt.blockNumber,
          transactionReceipt.blockNumber
        );
        const event = events.find(
          (event) => event.transactionHash === transactionHash
        );

        if (event) {
          const amount = event.args.value.toString();
          // console.log("Tokens transferred:", amount);
          return amount;
        } else {
          // console.log("No token transfer event found for the transaction.");
          // alert("No token transfer event found for the transaction.");
          toast.error('No token transfer event found for the tx.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          return "0";
        }
      } else {
        // console.log("Transaction not found or not successful.");
        // alert("Transaction not found or not successful.");
        toast.error('Transaction not found or not successful.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return "0";
      }
    } catch (error) {
      // console.error("Error reading transaction details:", error);
      // alert("No transaction found!");
      toast.error('No transaction found!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return "0";
    }
  };

  /**
   * Function ckecks the block conformation of the payment on the blockchain for Native token only.
   * The user will wait until the the transaction is confirmed until specified blocks.
   * @param {String} tx
   * @returns {Bool}
   */
  const checkBlockConformationsNative = async (tx) => {
    let provider = await getProvider();
    const confirmationsRequired = noOfBlockConformation;
    const receipt = await provider.waitForTransaction(
      tx,
      confirmationsRequired
    );

    if (receipt.status === 1) {
      let actualTokenTransfer = await checkTokenTransfersNative(tx);
      actualTokenTransfer = parseFloat(actualTokenTransfer);
      // console.log("actualTokenTransfer", actualTokenTransfer);
      let currentTokenPrice2 = await getCurrentTokenPrice(selectedToken?.name);
      currentTokenPrice2 = Amount / currentTokenPrice2;
      // console.log("currentTokenPrice", currentTokenPrice2);
      if (actualTokenTransfer !== 0) {
        if (actualTokenTransfer >= currentTokenPrice2) {
          // alert("Payment done successfully:)");
          toast.success('Payment done successfully:)', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          setIsPaymentCompleted(true);
          setPaymentStatus(true);
          setIsLoading(false);
          setIsPopupOpen(false)
          return true;
        } else {
          // alert("Something went wrong");
          toast.error('Something went wrong', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
          // console.log("Not sufficient amount transferred: ");
          return false;
        }
      } else {
        // alert("Unable to process payment\n Please try again ");
        toast.error('Unable to process payment\n Please try again ', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return false;
      }
    } else {
      // alert("Transaction failed to be processed");
      toast.error('Transaction failed to be processed', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return false;
    }
  };

  /**
   * Verifies the amount to token actually transfereed. Native tokens
   * @param {String} transactionHash
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */
  const checkTokenTransfersNative = async (tx) => {
    let provider = await getProvider();

    try {
      // Get the transaction details
      const transaction = await provider.getTransaction(tx);

      if (transaction && transaction.confirmations > 0) {
        const amountInWei = transaction.value;
        const amountInEther = ethers.utils.formatEther(amountInWei);
        // console.log("Ether transferred:", amountInEther);
        return amountInEther.toString();
      } else {
        // console.log("Transaction not found or not confirmed yet.");
        // alert("Transaction not found");
        toast.error('Transaction not found', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        return "0";
      }
    } catch (error) {
      // console.error("Error reading transaction details:", error);
      // alert("Unable to get transaction details");
      toast.error('Unable to get transaction details', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      return "0";
    }
  };

  /**
   *  Final function to combine all the above functions to complete the transaction
   * 1. Connet wallet
   * 2. Switch network if required
   * 3. make payment
   */
  const makePayment = async () => {
    if (selectedToken?.name == null || selectedChain?.name == null) {
      // alert("Please select the payment mode");
      toast.warning('Please select the payment mode', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
    } else {
      await connectWalletFunc();
      setBtnName("Make payment");
      if (isConnected) {
        // Stable Coins.
        if (selectedToken.type === "stable") {
          requestERC20Payment(
            Amount,
            TokenAddress[selectedChain?.name][selectedToken?.name]
          );
        }
        // Native Tokens
        else if (selectedChain?.id === selectedToken?.id) {
          let latestPrice = await getCurrentTokenPrice(selectedToken?.name); // Returns Float/Int of the current market price of the token.
          let latestAmount = Amount / latestPrice;
          nativeTokenPayment(latestAmount);
        }
        // ERC20 Tokens
        else {
          let latestPrice = await getCurrentTokenPrice(selectedToken?.name);
          let latestAmount = Amount / latestPrice;
          requestERC20Payment(
            latestAmount,
            TokenAddress[selectedChain?.name][selectedToken?.name]
          );
        }
      } else {
        await connectWalletFunc();
      }
    }
  };

  /**
   * Helper functions for pop up.
   */
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    // setIsLoading(!isLoading);
  };
  const handleTokenSelect = async (e) => {
    const filteredArray = Tokens.filter((obj) => obj.name === e.target.value);
    const token = filteredArray[0];
    let tokenPrice = "1";
    if (token?.type !== "stable")
      tokenPrice = await getCurrentTokenPrice(token?.name);
    setCurrentTokenPrice("1 " + token.name + " = $ " + tokenPrice);
    setSelectedToken(token);
  };
  const handleChainSelect = (e) => {
    const filteredArray = Chains.filter((obj) => obj.name === e.target.value);
    // console.log("setSelectedChain", filteredArray[0]);
    setSelectedChain(filteredArray[0]);
  };

  return (
    <>
      <button className="startBtnClass" style={Style} onClick={handleOpenPopup}>{Style?.displayName}</button>
      <br />
      <div>
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
                      <span>Blockchain</span>
                    </div>
                    <select
                      onChange={(e) => {
                        handleChainSelect(e);
                      }}
                      name="Chain"
                      id=""
                    >
                      {" "}
                      {selectChain}{" "}
                    </select>
                  </div>
                  <div className="inputGroup">
                    <div className="inputHeading">
                      <span>Token</span>
                    </div>
                    <select
                      onChange={(e) => {
                        handleTokenSelect(e);
                      }}
                      name="Tokens"
                      id=""
                    >
                      {" "}
                      {selectToken}{" "}
                    </select>
                  </div>
                  <div className="live-token-price">{currentTokenPrice}</div>
                  <div className="inputGroup">
                    <button onClick={makePayment}>
                      {!isLoading && btnName}
                      {isLoading &&
                        <div className="spinner">
                          <div className="bar1"></div>
                          <div className="bar2"></div>
                          <div className="bar3"></div>
                          <div className="bar4"></div>
                          <div className="bar5"></div>
                          <div className="bar6"></div>
                          <div className="bar7"></div>
                          <div className="bar8"></div>
                          <div className="bar9"></div>
                          <div className="bar10"></div>
                          <div className="bar11"></div>
                          <div className="bar12"></div>
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
    <ToastContainer/>
    </>
  );
}

export default EVMConnect;
