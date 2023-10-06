import axios from 'axios'
import React, { useState } from 'react'
import { ethers } from 'ethers'
import { connectWallet, switchNetwork } from './EVMFunctions/ConnectMeta'
import { ChainIds, ERC20_ABI, TokenAddress } from '../Constants/Constants'

import '../CSS/PaymentPopUp.css'
import '../CSS/Loader.css'

function EVMComponent({Address, Tokens, Chain, Amount}) { 

    const [selectedToken, setSelectedToken] = useState(null);
    const [selectedChain, setSelectedChain] = useState(null);
    const [userAddress, setUserAddress] = useState();
    const [paymentWindowTimeout, setPaymentWindowTimeout] = useState() // If it's True then only it's success 
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false)
    const [currentTokenPrice, setCurrentTokenPrice] = useState() // To display the conversion rate for token. 
    const [isConnected, setIsConnected] = useState(false)

    const [btnName, setBtnName] = useState("Make Payment");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



    async function test() {
        // getCurrentTokenPrice("Dogecoin")
        // connectWalletFunc()

        // let detila = TokenAddress[selectedChain][selectedToken]
        // console.log("detila",detila)

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // checkBlockConformations("0x26ebfe794a8f02e9f32b8f41e4f2ce606d6e1eeb45938ae148322066102f3525", provider, '18');

        // const receipt = await provider.getTransactionReceipt("0x935e531e1bd14dd0959040d1c4fd648049af710e0a33b4045e89d8d684f9ce14");
        // const transaction = await provider.getTransaction("0x935e531e1bd14dd0959040d1c4fd648049af710e0a33b4045e89d8d684f9ce14");

        setIsLoading(!isLoading);
        // checkBlockConformationsNative("0x26ebfe794a8f02e9f32b8f41e4f2ce606d6e1eeb45938ae148322066102f3525", provider )
        
    }

    let selectChain = Chain.map((chain) => {
        return (
            <>
            <option value="" disabled selected hidden>Select Blockchain</option>
                <option key={chain} value={chain}> {chain}</option>
            </>
        )
    })
    let selectToken = Tokens.map((tokens) => {
        return (
            <>
                <option value="" disabled selected hidden>Select Token</option>
                <option key={tokens} value={tokens}> {tokens}</option>
            </>
        )
    })

    const getChain = (e) => {
        setSelectedChain(e.target.value)
    }
    const getToken = (e) => {
        setSelectedToken(e.target.value) 
    }

    // Reterivies the current price in USD from Coingecko // Input: Token name e.g. Ethereum / Bitcoin/ Dogecoin
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
    // Will update the current price after every 5 minutes.
    const startPaymentTimer = async() => {

    }

    const connectWalletFunc = async () => {
        setBtnName("Connecting")
        let connectFunc = await  connectWallet()
        let getChainData = ChainIds
        setUserAddress(connectFunc.account)
        setBtnName("Connected")
        

        if(connectFunc.chainId != getChainData[selectedChain]){
            // console.log("Change network")
            setBtnName("Switch network")
            switchNetwork(getChainData[selectedChain])
            setIsConnected(true) 
            return true
        }
        else{
            // console.log("No need")
            setIsConnected(true)
            // makePayment()
            return true
        }
    }
    const requestERC20Payment = async( _amount, _tokenAddress) => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setCurrentTokenPrice(_amount)

        try {

            const contractInstance = new ethers.Contract(_tokenAddress, ERC20_ABI, signer);
            let decimals = await contractInstance.decimals();
            decimals = decimals.toString();

            const getApprove = await contractInstance.approve(userAddress, (_amount * (10**decimals)));
            // await getApprove.wait(); 
            alert("Token approved successfully:)")

            let tx = await contractInstance.transferFrom(userAddress, Address , (_amount * (10**decimals) ), {gasLimit: 100000});
            await tx.wait();
            console.log("tx.hash:--",tx.hash)

            await checkBlockConformations(tx.hash, provider, decimals)
            
        } catch (error) {
            alert(error)
        }
        
    }

    const nativeTokenPayment = async ( _amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        let amount = _amount;
        setCurrentTokenPrice(amount)
        let slicedNum = amount.toFixed(10)
        let amountInWei = ethers.utils.parseEther(slicedNum.toString())

        try {
            const tx = await signer.sendTransaction({
                to: Address,
                value: amountInWei,
                gasLimit: '0x5028',
                maxPriorityFeePerGas: '0x3b9aca00',
                maxFeePerGas: '0x2540be400',
            })
            await tx.wait()

            await checkBlockConformationsNative(tx.hash, provider)

        } catch (error) {
            alert("Something went wrong")
            console.log(error)
        }
    }

    const checkBlockConformations = async(tx, provider, decimals) => {
        const confirmationsRequired = 2;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);

        if(receipt.status === 1){

            let actualTokenTransfer = await checkTokenTransfers(tx, provider)
            if(actualTokenTransfer !== '0'){
                let _amount = parseFloat(actualTokenTransfer)
                let _decimals = parseFloat(decimals)
                console.log("Amount * _decimals", Amount )

                if(_amount/(10 ** decimals) >= Amount ){
                    alert("Payment done successfully:)")
                    setIsPaymentCompleted(true);
                    return true
                }
                else{
                    alert("Something went wrong");
                    console.log("Not sufficient amount transferred: ")
                    return false;
                }
            }
            else {
                alert("Unable to process payment\n Please try again ");
                return false;
            }
        }
        else{
            alert("Transaction failed to be processed");
            return false;
        }        
    }
    // Verifies the amount to token actually transfereed. ERC20 tokens
    const checkTokenTransfers = async(transactionHash, provider) => {

        try {
            const transactionReceipt = await provider.getTransactionReceipt(transactionHash);
        
            if (transactionReceipt && transactionReceipt.status === 1) {

                const tokenContract = new ethers.Contract(TokenAddress[selectedChain][selectedToken], ERC20_ABI, provider);
            
                const filter = tokenContract.filters.Transfer(null, null, null);
                const events = await tokenContract.queryFilter(filter, transactionReceipt.blockNumber, transactionReceipt.blockNumber);
                const event = events.find((event) => event.transactionHash === transactionHash);
        
                if (event) {
                    const amount = event.args.value.toString();
            
                    console.log('Tokens transferred:', amount);
                    return amount;
                } 
              
                else {
                    console.log('No token transfer event found for the transaction.');
                    alert('No token transfer event found for the transaction.');
                    return '0';
                }
            } 
            else {
                console.log('Transaction not found or not successful.');
                alert('Transaction not found or not successful.');
                return '0'; 
            }
        } 
        catch (error) {
            console.error('Error reading transaction details:', error);
            alert("No transaction found!")
            return '0';
        }
    }

    const checkBlockConformationsNative = async(tx, provider) => {
        const confirmationsRequired = 2;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);

        if(receipt.status === 1){

            let actualTokenTransfer = await checkTokenTransfersNative(tx, provider)
            actualTokenTransfer = parseFloat(actualTokenTransfer)
            console.log("actualTokenTransfer",actualTokenTransfer)
            let currentTokenPrice2 = await getCurrentTokenPrice(selectedToken)
            currentTokenPrice2 = Amount/currentTokenPrice2
            console.log("currentTokenPrice",currentTokenPrice2)
            if(actualTokenTransfer !== 0){

                if(actualTokenTransfer >= currentTokenPrice2 ){
                    alert("Payment done successfully:)")
                    setIsPaymentCompleted(true);
                    return true
                }
                else{
                    alert("Something went wrong");
                    console.log("Not sufficient amount transferred: ")
                    return false;
                }
            }
            else {
                alert("Unable to process payment\n Please try again ");
                return false;
            }
        }
        else{
            alert("Transaction failed to be processed");
            return false;
        }        
    }

    const checkTokenTransfersNative = async (tx, provider) => {
        let transactionHash  ="0x26ebfe794a8f02e9f32b8f41e4f2ce606d6e1eeb45938ae148322066102f3525"
        try {
            // Get the transaction details
            const transaction = await provider.getTransaction(transactionHash);
        
            if (transaction && transaction.confirmations > 0) {

                const amountInWei = transaction.value;
                const amountInEther = ethers.utils.formatEther(amountInWei);        
                console.log('Ether transferred:', amountInEther);
                return amountInEther.toString();
            } 
            else {
                console.log('Transaction not found or not confirmed yet.');
                alert("Transaction not found")
                return '0';
            }
        } 
        catch (error) {
                console.error('Error reading transaction details:', error);
                alert('Unable to get transaction details');
                return '0';
        }
    }
    const makePayment = async() => {
        
        if ((selectedToken == null) || (selectedChain == null)) {
            alert("Please select the payment mode")
        }
        else {

            await connectWalletFunc();
            setBtnName("Make payment")
    
            if(isConnected){
                
                // if(TokenAddress[selectedChain][selectedToken] === undefined && selectedChain === selectedToken){
                //     alert("Token is not available!")        
                // }
                // Stable Coins.
                if ( selectedToken === "USDT" || selectedToken === "USDC" || selectedToken === "DAI" ){
                    requestERC20Payment(Amount, TokenAddress[selectedChain][selectedToken]);
                }   
                // Native Tokens
                else if (selectedChain === selectedToken) {
                    let latestPrice = await getCurrentTokenPrice(selectedToken)
                    let latestAmount = (Amount / latestPrice )
                    nativeTokenPayment(latestAmount)
                }
                // ERC20 Tokens
                else {
                    let latestPrice = await getCurrentTokenPrice(selectedToken)
                    let latestAmount = (Amount / latestPrice )
                    requestERC20Payment(latestAmount, TokenAddress[selectedChain][selectedToken])   
                }
            }
            else {
                await connectWalletFunc();
            }
        }
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
            <h1>EVM Component</h1>
            <br /> <br />

            <button onClick={handleOpenPopup}>Make Payment</button>

            <div>
                {/* Popup */}
                {isPopupOpen && (
                    <div className="popup-container">
                        <div className="popup-content">

                            <div className="modal-contents">

                            <span className="close" onClick={handleClosePopup}>&times;</span>

                            <div className="inputs">

                                <h2>Make payment</h2> 

                                        <select onChange={getChain} name="Chain" id=""> {selectChain} </select>
                                        <select onChange={getToken} name="Tokens" id=""> {selectToken} </select>

                                        {/* <button onClick={test}>Test</button> */}                                        
                                        <br /><br /><br />
                                        {/* <button on onClick={test}>Test Btn</button> */}
                                        <button onClick={makePayment}>{btnName}</button>

                                {isLoading ? (
                                    // Display the spinner when isLoading is true
                                    <div className="spinner">
                                        <div>
                                            <span class="loader"></span>
                                        </div>
                                    </div>
                                ) : (

                                    <div>
                                        
                                        
                                    </div>
                                )}
                            </div>
                            
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default EVMComponent