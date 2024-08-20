import React, { useState } from 'react'
import '../CSS/SelectBlockchain.css'
import resmiclogo from '../assets/resmiclogo.png'
import { SupportedTokens } from './Constant/Constant';
import { makeEVMPayment } from './EVM/EVMProcess';
import {ToastContainer, toast } from "react-toastify";
import { Select, Button, Input, Tooltip } from "antd";
import "../CSS/EVMComponent.css"
import "../CSS/PaymentPopUp.css";
import "../CSS/Loader.css";
import { makeStarknetPayment } from './Starknet/StarknetProcess';
import { makeNibiruPayment } from './Nibiru/NibiruProcess';
import { makeSolanaPayment } from './Solana/SolanaProcess';

/* global BigInt */ //@note Do note delete this.

/**
 * * Master component to navigate as per blockchain selection.
 * @param {String} Address // Address where funds will be get transferred
 * @param {Array} Tokens  // Array of tokens user want to accept
 * @param {Array} Chain  // Array of blockchain user want to accept
 * @param {INT} Amount  // Amount to accept in USD, INT/FLOAT
 * @param {INT} noOfBlockConformation // No. of Block Conformation to verify the transaction
 * @param {bool} setPaymentStatus // Returns the payment completion status of the tx.  // Customise CSS for buttons.
 * @param {Style} CSS  // Customise CSS for buttons.
 * @returns React componen
 */
function CryptoPayment({Address, Tokens, Chains, Amount, noOfBlockConformation, setPaymentStatus, Style = {displayName: "Make Payment", 
backgroundColor: "#007bff",
color: "#fff",
border: "none",
padding: "10px 20px",
borderRadius: "4px",
fontSize: "18px",
cursor: "pointer"},}) {
    const [isPopUpOpen, setIsPopUpOpen] = useState(true);
    const [selectedBlockchain, setSelectedBlockchain] = useState("");
    const [selectedToken, setSelectedToken] = useState("");
    const [btnName, setBtnName] = useState("Make Payment");
    const [isLoading, setIsLoading] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false); // If Bockchain and Token are selected & Clicked on make payment, The Dropdown will be disabled.
    const [currentTokenPrice, setCurrentTokenPrice] = useState(""); // To display the conversion rate for token.

    
    /**
     * Navigates the selections to selected blockchain.
     */
    const makePayment = async() => {
        if (selectedBlockchain ==="" || selectedToken === ""){
            toast.warning('Please select payment method', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        }
        else {
            switch (selectedBlockchain) {
                case "Starknet":
                    console.log("Redirect to Starknet");
                    setIsLoading(true)
                    let makePaymentStarknet = await makeStarknetPayment(selectedToken, Address, Amount, noOfBlockConformation);
                    setPaymentStatus(makePaymentStarknet);
                    if (makePaymentStarknet) setIsPopUpOpen(false);
                    setIsLoading(false)
                    break;

                case "Solana":
                    console.log("Redirect to Starknet");
                    setIsLoading(true)
                    let makePaymentSolana = await makeSolanaPayment(selectedToken, Address, Amount, noOfBlockConformation);
                    setPaymentStatus(makePaymentSolana);
                    if (makePaymentSolana) setIsPopUpOpen(false);
                    setIsLoading(false)
                    break;

                case "Nibiru":
                    console.log("Redirect to Nibiru")
                    setIsLoading(true);
                    let makeNibiruPay = await makeNibiruPayment(selectedToken, Address, Amount, noOfBlockConformation);
                    setPaymentStatus(makeNibiruPay);
                    if (makeNibiruPay) setIsPopUpOpen(false)                   
                    setIsLoading(false)
                    break;
                    
                default: // All EVM blockchain will be redirected as default.
                    setIsLoading(true)
                    let makePaymentEVM = await makeEVMPayment(selectedBlockchain, selectedToken, Address, Amount, noOfBlockConformation);
                    setPaymentStatus(makePaymentEVM);
                    if (makePaymentEVM) setIsPopUpOpen(false)                   
                    setIsLoading(false)
                    break;
            }
        }
    }


    return (
    <>
        <button style={Style} onClick={() => setIsPopUpOpen(true)}>{Style?.displayName}</button>

        {isPopUpOpen && (
            <div className="popup-container">
            <div className="popup-content">
                <div className="resmic-logo">
                    <img src={resmiclogo} alt="resmic image"/>
                    <span className="close" onClick={() => setIsPopUpOpen(false)}>&times;</span>
                </div>
                <div className="modal-contents">
                    <div className="inputs">
                    <div className="popup-heading">
                        {/* <span>Pay amount</span> */}
                        <span className='AmountPayableSpan'>AMOUNT PAYABLE</span>
                        <div className="amount">${Amount.toFixed(2)}</div>
                    </div>
                    
                    {/* Select Blockchian DropDown */}
                    <div className="inputGroup">
                    <label className="inputHeading">Blockchain</label>
                        <Select placeholder="Select Blockchain" showSearch onChange={setSelectedBlockchain }
                            size='large'
                        >
                            {Object.keys(Chains).map((chain) => (
                                <option key={Chains[chain].name} value={Chains[chain].name}>{Chains[chain].name}</option>
                            ))}
                        </Select>
                    </div>

                    
                    {/* Select Tokens DropDown */}
                    <div className="inputGroup">
                        <label className="inputHeading">Token</label>
                        <Select className='selectDropdown' id="" placeholder="Select Token" showSearch  onChange={setSelectedToken} disabled={isAllSelected}
                            size='large'
                        >
                            {Tokens.filter(obj => SupportedTokens[selectedBlockchain].includes(obj.name)).map(obj => (
                                <option  key={obj.name} value={obj.name}>
                                        {obj.name}
                                </option>
                            ))}
                        </Select>
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
        <ToastContainer/>
    </>
  )
}

export default CryptoPayment