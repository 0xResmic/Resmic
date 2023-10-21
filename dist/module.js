import "./main.css";
import {jsxs as $5OpyM$jsxs, Fragment as $5OpyM$Fragment, jsx as $5OpyM$jsx} from "react/jsx-runtime";
import $5OpyM$axios from "axios";
import {useState as $5OpyM$useState} from "react";
import {ethers as $5OpyM$ethers} from "ethers";
import {toast as $5OpyM$toast, ToastContainer as $5OpyM$ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}




var $d896c950a751df0f$exports = {};

$parcel$export($d896c950a751df0f$exports, "TokenAddress", () => $d896c950a751df0f$export$5c2c3f7af123bc40);
$parcel$export($d896c950a751df0f$exports, "Chains", () => $d896c950a751df0f$export$c3f32f9b7c2f46bb);
$parcel$export($d896c950a751df0f$exports, "Tokens", () => $d896c950a751df0f$export$8e1e81ac145e31be);
$parcel$export($d896c950a751df0f$exports, "ERC20_ABI", () => $d896c950a751df0f$export$89843982d7e60b14);
/**
 * Supported {Verified } ERC 20 token address
 */ const $d896c950a751df0f$export$5c2c3f7af123bc40 = {
    "Ethereum": {
        "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "DAI": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        "Bitcoin": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "Matic": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    },
    "Polygon": {
        "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        "USDC": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "DAI": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        "BUSD": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
        "Bitcoin": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        "BNB": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
        "Ethereum": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
    },
    "Binance": {
        "BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "DAI": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        "BSC-USD": "0x55d398326f99059fF775485246999027B3197955",
        "USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "DOGE": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        "Matic": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        "Ethereum": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "Bitcoin": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
    },
    "Optimism": {
        "USDT": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        "USDC": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        "Bitcoin": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
        "DAI": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        "Optimism": "0x4200000000000000000000000000000000000042"
    },
    "Goerli": {
        "USDC": "0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "DAI": "0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33"
    }
};
const $d896c950a751df0f$export$c3f32f9b7c2f46bb = {
    Ethereum: {
        "name": "Ethereum",
        "id": "0x1"
    },
    Polygon: {
        "name": "Polygon",
        "id": "0x89",
        "img": "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
    },
    Binance: {
        "name": "Binance",
        "id": "0x38"
    },
    Optimism: {
        "name": "Optimism",
        "id": "0xa"
    },
    Goerli: {
        "name": "Goerli",
        "id": "0x5"
    }
};
const $d896c950a751df0f$export$8e1e81ac145e31be = {
    USDT: {
        "dname": "USDT",
        "name": "USDT",
        "type": "stable",
        "id": "-1",
        "img": "url"
    },
    USDC: {
        "dname": "USDC",
        "name": "USDC",
        "type": "stable",
        "id": "-1"
    },
    DAI: {
        "dname": "DAI",
        "name": "DAI",
        "type": "stable",
        "id": "-1"
    },
    BUSD: {
        "dname": "BUSD",
        "name": "BUSD",
        "type": "stable",
        "id": "-1"
    },
    ETH: {
        "dname": "Ethereum",
        "name": "Ethereum",
        "type": "unstable",
        "id": "0x1"
    },
    MATIC: {
        "dname": "MATIC",
        "name": "matic-network",
        "type": "unstable",
        "id": "0x89",
        "img": "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
    },
    BNB: {
        "dname": "BNB",
        "name": "BNB",
        "type": "unstable",
        "id": "0x38"
    },
    Bitcoin: {
        "dname": "Bitcoin",
        "name": "Bitcoin",
        "type": "unstable",
        "id": "-1",
        "img": "https://bitcoin.org/img/icons/logotop.svg?1693519667"
    },
    DOGE: {
        "dname": "Dogecoin",
        "name": "dogecoin",
        "type": "unstable",
        "id": "-1"
    },
    OPTIMISM: {
        "dname": "Optimism",
        "name": "Optimism",
        "type": "unstable",
        "id": "-1"
    },
    BSCUSD: {
        "dname": "BSCUSD",
        "name": "BSCUSD",
        "type": "stable",
        "id": "-1"
    },
    GETH: {
        "dname": "Ethereum",
        "name": "Ethereum",
        "type": "unstable",
        "id": "0x5"
    }
};
const $d896c950a751df0f$export$89843982d7e60b14 = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "address"
            }
        ],
        name: "allowed",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            },
            {
                name: "_spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "remaining",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "Pause",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "Unpause",
        type: "event"
    }
];


var $6bd1a453b3d21aa8$exports = {};
$6bd1a453b3d21aa8$exports = new URL("resmiclogo.4179cff7.png", import.meta.url).toString();





async function $59f1f3846795b51e$export$43158100a9ac6874() {
    let account;
    let currentChainId;
    if (!window.ethereum) alert("Please install MetaMask!");
    await window.ethereum.request({
        method: "eth_requestAccounts"
    }).then((accounts)=>{
        account = accounts[0];
    }).catch((e)=>{
        alert(e);
    });
    const chainId = await window.ethereum.request({
        method: "eth_chainId"
    });
    return {
        account: account,
        chainId: chainId
    };
}
async function $59f1f3846795b51e$export$f3473d805e486329(networkId) {
    // await window.ethereum.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: networkId }],
    //   });
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: networkId
                }
            ]
        });
    } catch (switchError) {
        alert("Unable to switch network!");
        switchError.code;
    }
}
async function $59f1f3846795b51e$export$57632def5536cb24() {
    const provider = new (0, $5OpyM$ethers).providers.Web3Provider(window.ethereum);
    return provider;
}
async function $59f1f3846795b51e$export$c128ec6fd8bee8d4() {
    const provider = new (0, $5OpyM$ethers).providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
}





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
 */ function $c3da8292154b5c08$var$EVMComponent({ Address: Address, Tokens: Tokens, Chains: Chains, Amount: Amount, Style: Style = {
    displayName: "Make Payment",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"
}, setPaymentStatus: setPaymentStatus, noOfBlockConformation: noOfBlockConformation = 3 }) {
    const [selectedToken, setSelectedToken] = (0, $5OpyM$useState)(null);
    const [selectedChain, setSelectedChain] = (0, $5OpyM$useState)(null);
    const [userAddress, setUserAddress] = (0, $5OpyM$useState)();
    const [isPaymentCompleted, setIsPaymentCompleted] = (0, $5OpyM$useState)(false);
    const [currentTokenPrice, setCurrentTokenPrice] = (0, $5OpyM$useState)(""); // To display the conversion rate for token.
    const [isConnected, setIsConnected] = (0, $5OpyM$useState)(false);
    const [btnName, setBtnName] = (0, $5OpyM$useState)("Connect Wallet");
    const [isPopupOpen, setIsPopupOpen] = (0, $5OpyM$useState)(false);
    const [isLoading, setIsLoading] = (0, $5OpyM$useState)(false);
    // Select Blockchain dropdown selection menu.
    let selectChain = Chains.map((chain)=>{
        return /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Fragment), {
            children: [
                /*#__PURE__*/ (0, $5OpyM$jsx)("option", {
                    value: "",
                    disabled: true,
                    selected: true,
                    hidden: true,
                    children: "Select Blockchain"
                }),
                /*#__PURE__*/ (0, $5OpyM$jsxs)("option", {
                    value: chain?.name,
                    children: [
                        " ",
                        /*#__PURE__*/ (0, $5OpyM$jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($6bd1a453b3d21aa8$exports))),
                            alt: ""
                        }),
                        chain?.name,
                        " "
                    ]
                }, chain?.name)
            ]
        });
    });
    // Select Token dropdown selection menu.
    let selectToken = Tokens.map((token)=>{
        return /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Fragment), {
            children: [
                /*#__PURE__*/ (0, $5OpyM$jsx)("option", {
                    value: "",
                    disabled: true,
                    selected: true,
                    hidden: true,
                    children: "Select Token"
                }),
                /*#__PURE__*/ (0, $5OpyM$jsxs)("option", {
                    value: token?.dname,
                    children: [
                        " ",
                        token?.dname
                    ]
                }, token?.dname)
            ]
        });
    });
    /**
   * Reterivies the current price in USD from Coingecko
   * @param {String} // string e.g. "Ethereum"
   * @return {Number} value in USD
   */ const getCurrentTokenPrice = async (_token)=>{
        let token = _token.toLowerCase();
        try {
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;
            let fetchUrl = await (0, $5OpyM$axios).get(url);
            let currentUsdPrice = fetchUrl.data[token]["usd"];
            // console.log(currentUsdPrice)
            return currentUsdPrice;
        } catch (error) {
            // alert("Error while getting token price");
            (0, $5OpyM$toast).error("Unable to fetch live price!", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            console.log(error.message);
        }
    };
    /**
   * Connects user to Wallet {Metamask wallet}
   * Changes the Blockchain if required.
   */ const connectWalletFunc = async ()=>{
        setBtnName("Connecting");
        setIsLoading(true);
        let connectFunc = await (0, $59f1f3846795b51e$export$43158100a9ac6874)(); // Calling connect function from Constant/ConnectMeta
        setUserAddress(connectFunc.account); // Returns the connected wallet address.
        setBtnName("Make Payment");
        setIsLoading(false);
        // if(connectFunc.chainId != getChainData[selectedChain]){ // connectFunc.chainId -> Returns the current connected chain
        if (connectFunc.chainId !== selectedChain.id) {
            // connectFunc.chainId -> Returns the current connected chain
            // console.log("Change network")
            setBtnName("Switching network");
            setIsLoading(true);
            await (0, $59f1f3846795b51e$export$f3473d805e486329)(selectedChain.id);
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
   */ const requestERC20Payment = async (_amount, _tokenAddress)=>{
        setIsLoading(true);
        const signer = await (0, $59f1f3846795b51e$export$c128ec6fd8bee8d4)();
        // setCurrentTokenPrice("Current Conversion rate: $" + _amount)
        try {
            /**
       * The ERC20 payment requires 2 transactions
       * 1. Approval of token
       * 2. Transafer of token
       */ const contractInstance = new (0, $5OpyM$ethers).Contract(_tokenAddress, (0, $d896c950a751df0f$export$89843982d7e60b14), signer);
            let decimals = await contractInstance.decimals();
            decimals = decimals.toString();
            const getApprove = await contractInstance.approve(userAddress, (_amount * 10 ** decimals).toString());
            await getApprove.wait();
            // alert("Token approved successfully:)"); 
            (0, $5OpyM$toast).success("Token approved", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            let tx = await contractInstance.transferFrom(userAddress, Address, (_amount * 10 ** decimals).toString(), {
                gasLimit: 100000
            });
            await tx.wait();
            // console.log("tx.hash:--", tx.hash);
            await checkBlockConformations(tx.hash, decimals);
        } catch (error) {
            // alert("Something went wrong."); 
            (0, $5OpyM$toast).error("Something went wrong.", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            console.log(error);
        }
    };
    /**
   * Function for native token transfers.
   * @param {INT/FLOAT} _amount // Amount in native token ().
   *
   */ const nativeTokenPayment = async (_amount)=>{
        const signer = await (0, $59f1f3846795b51e$export$c128ec6fd8bee8d4)();
        let amount = _amount;
        // setCurrentTokenPrice("Current Conversion rate: $" + _amount)
        let slicedNum = amount.toFixed(10); // Rounding it to 10 digits.
        let amountInWei = (0, $5OpyM$ethers).utils.parseEther(slicedNum.toString()); // Converting the amount to WEI {Smallest amount of ETH (1 ETH = 10 ** 18)}
        try {
            // Transfer of funds to address
            const tx = await signer.sendTransaction({
                to: Address,
                value: amountInWei
            });
            await tx.wait();
            await checkBlockConformationsNative(tx.hash);
        } catch (error) {
            // alert("Something went wrong");
            (0, $5OpyM$toast).error("Something went wrong.", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            console.log(error);
        }
    };
    /**
   * Function ckecks the block conformation of the payment on the blockchain for ERC20 token only.
   * The user will wait until the the transaction is confirmed until specified blocks.
   * @param {String} tx // Transaction hash after the payment.
   * @param {INT} decimals
   * @returns {Bool} returns the paymetn update.
   */ const checkBlockConformations = async (tx, decimals)=>{
        let provider = await (0, $59f1f3846795b51e$export$57632def5536cb24)();
        const confirmationsRequired = noOfBlockConformation;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
        // Checks the status of the transaction
        if (receipt.status === 1) {
            let actualTokenTransfer = await checkTokenTransfers(tx);
            if (actualTokenTransfer !== "0") {
                let _amount = parseFloat(actualTokenTransfer);
                if (_amount / (10 ** decimals).toString() >= Amount) {
                    setIsPaymentCompleted(true);
                    setPaymentStatus(true);
                    // alert("Payment done successfully:)");
                    (0, $5OpyM$toast).success("Payment done successfully.", {
                        position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    setIsPaymentCompleted(true);
                    setPaymentStatus(true);
                    setIsLoading(false);
                    setIsPopupOpen(false);
                    return true;
                } else {
                    // alert("Something went wrong");
                    (0, $5OpyM$toast).error("Something went wrong.", {
                        position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    // console.log("Not sufficient amount transferred: ");
                    return false;
                }
            } else {
                // alert("Unable to process payment\n Please try again ");
                (0, $5OpyM$toast).error("Unable to process payment\n Please try again", {
                    position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return false;
            }
        } else {
            // alert("Transaction failed to be processed");
            (0, $5OpyM$toast).error("Transaction failed to be processed", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return false;
        }
    };
    /**
   * Verifies the amount to token actually transfereed. ERC20 tokens
   * @param {String} transactionHash
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */ const checkTokenTransfers = async (transactionHash)=>{
        let provider = await (0, $59f1f3846795b51e$export$57632def5536cb24)();
        try {
            const transactionReceipt = await provider.getTransactionReceipt(transactionHash);
            if (transactionReceipt && transactionReceipt.status === 1) {
                const tokenContract = new (0, $5OpyM$ethers).Contract((0, $d896c950a751df0f$export$5c2c3f7af123bc40)[selectedChain?.name][selectedToken?.name], (0, $d896c950a751df0f$export$89843982d7e60b14), provider);
                const filter = tokenContract.filters.Transfer(null, null, null);
                const events = await tokenContract.queryFilter(filter, transactionReceipt.blockNumber, transactionReceipt.blockNumber);
                const event = events.find((event)=>event.transactionHash === transactionHash);
                if (event) {
                    const amount = event.args.value.toString();
                    // console.log("Tokens transferred:", amount);
                    return amount;
                } else {
                    // console.log("No token transfer event found for the transaction.");
                    // alert("No token transfer event found for the transaction.");
                    (0, $5OpyM$toast).error("No token transfer event found for the tx.", {
                        position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    return "0";
                }
            } else {
                // console.log("Transaction not found or not successful.");
                // alert("Transaction not found or not successful.");
                (0, $5OpyM$toast).error("Transaction not found or not successful.", {
                    position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return "0";
            }
        } catch (error) {
            // console.error("Error reading transaction details:", error);
            // alert("No transaction found!");
            (0, $5OpyM$toast).error("No transaction found!", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return "0";
        }
    };
    /**
   * Function ckecks the block conformation of the payment on the blockchain for Native token only.
   * The user will wait until the the transaction is confirmed until specified blocks.
   * @param {String} tx
   * @returns {Bool}
   */ const checkBlockConformationsNative = async (tx)=>{
        let provider = await (0, $59f1f3846795b51e$export$57632def5536cb24)();
        const confirmationsRequired = noOfBlockConformation;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
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
                    (0, $5OpyM$toast).success("Payment done successfully:)", {
                        position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    setIsPaymentCompleted(true);
                    setPaymentStatus(true);
                    setIsLoading(false);
                    setIsPopupOpen(false);
                    return true;
                } else {
                    // alert("Something went wrong");
                    (0, $5OpyM$toast).error("Something went wrong", {
                        position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    // console.log("Not sufficient amount transferred: ");
                    return false;
                }
            } else {
                // alert("Unable to process payment\n Please try again ");
                (0, $5OpyM$toast).error("Unable to process payment\n Please try again ", {
                    position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return false;
            }
        } else {
            // alert("Transaction failed to be processed");
            (0, $5OpyM$toast).error("Transaction failed to be processed", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return false;
        }
    };
    /**
   * Verifies the amount to token actually transfereed. Native tokens
   * @param {String} transactionHash
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */ const checkTokenTransfersNative = async (tx)=>{
        let provider = await (0, $59f1f3846795b51e$export$57632def5536cb24)();
        try {
            // Get the transaction details
            const transaction = await provider.getTransaction(tx);
            if (transaction && transaction.confirmations > 0) {
                const amountInWei = transaction.value;
                const amountInEther = (0, $5OpyM$ethers).utils.formatEther(amountInWei);
                // console.log("Ether transferred:", amountInEther);
                return amountInEther.toString();
            } else {
                // console.log("Transaction not found or not confirmed yet.");
                // alert("Transaction not found");
                (0, $5OpyM$toast).error("Transaction not found", {
                    position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return "0";
            }
        } catch (error) {
            // console.error("Error reading transaction details:", error);
            // alert("Unable to get transaction details");
            (0, $5OpyM$toast).error("Unable to get transaction details", {
                position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return "0";
        }
    };
    /**
   *  Final function to combine all the above functions to complete the transaction
   * 1. Connet wallet
   * 2. Switch network if required
   * 3. make payment
   */ const makePayment = async ()=>{
        if (selectedToken?.name == null || selectedChain?.name == null) // alert("Please select the payment mode");
        (0, $5OpyM$toast).warning("Please select the payment mode", {
            position: (0, $5OpyM$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        else {
            await connectWalletFunc();
            setBtnName("Make payment");
            if (isConnected) {
                // Stable Coins.
                if (selectedToken.type === "stable") requestERC20Payment(Amount, (0, $d896c950a751df0f$export$5c2c3f7af123bc40)[selectedChain?.name][selectedToken?.name]);
                else if (selectedChain?.id === selectedToken?.id) {
                    let latestPrice = await getCurrentTokenPrice(selectedToken?.name); // Returns Float/Int of the current market price of the token.
                    let latestAmount = Amount / latestPrice;
                    nativeTokenPayment(latestAmount);
                } else {
                    let latestPrice = await getCurrentTokenPrice(selectedToken?.name);
                    let latestAmount = Amount / latestPrice;
                    requestERC20Payment(latestAmount, (0, $d896c950a751df0f$export$5c2c3f7af123bc40)[selectedChain?.name][selectedToken?.name]);
                }
            } else await connectWalletFunc();
        }
    };
    /**
   * Helper functions for pop up.
   */ const handleOpenPopup = ()=>{
        setIsPopupOpen(true);
    };
    const handleClosePopup = ()=>{
        setIsPopupOpen(false);
    // setIsLoading(!isLoading);
    };
    const handleTokenSelect = async (e)=>{
        const filteredArray = Tokens.filter((obj)=>obj.name === e.target.value);
        const token = filteredArray[0];
        let tokenPrice = "1";
        if (token?.type !== "stable") tokenPrice = await getCurrentTokenPrice(token?.name);
        setCurrentTokenPrice("1 " + token.name + " = $ " + tokenPrice);
        setSelectedToken(token);
    };
    const handleChainSelect = (e)=>{
        const filteredArray = Chains.filter((obj)=>obj.name === e.target.value);
        // console.log("setSelectedChain", filteredArray[0]);
        setSelectedChain(filteredArray[0]);
    };
    return /*#__PURE__*/ (0, $5OpyM$jsxs)((0, $5OpyM$Fragment), {
        children: [
            /*#__PURE__*/ (0, $5OpyM$jsx)("button", {
                className: "startBtnClass",
                style: Style,
                onClick: handleOpenPopup,
                children: Style?.displayName
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)("br", {}),
            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                children: isPopupOpen && /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                    className: "popup-container",
                    children: /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                        className: "popup-content",
                        children: [
                            /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                className: "resmic-logo",
                                children: [
                                    /*#__PURE__*/ (0, $5OpyM$jsx)("img", {
                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($6bd1a453b3d21aa8$exports))),
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0, $5OpyM$jsx)("span", {
                                        className: "close",
                                        onClick: handleClosePopup,
                                        children: "\xd7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                className: "modal-contents",
                                children: /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                    className: "inputs",
                                    children: [
                                        /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                            className: "popup-heading",
                                            children: [
                                                /*#__PURE__*/ (0, $5OpyM$jsx)("span", {
                                                    children: "Pay amount"
                                                }),
                                                /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                                    className: "amount",
                                                    children: [
                                                        "$",
                                                        Amount.toFixed(2)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                            className: "inputGroup",
                                            children: [
                                                /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                    className: "inputHeading",
                                                    children: /*#__PURE__*/ (0, $5OpyM$jsx)("span", {
                                                        children: "Blockchain"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $5OpyM$jsxs)("select", {
                                                    onChange: (e)=>{
                                                        handleChainSelect(e);
                                                    },
                                                    name: "Chain",
                                                    id: "",
                                                    children: [
                                                        " ",
                                                        selectChain,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                            className: "inputGroup",
                                            children: [
                                                /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                    className: "inputHeading",
                                                    children: /*#__PURE__*/ (0, $5OpyM$jsx)("span", {
                                                        children: "Token"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $5OpyM$jsxs)("select", {
                                                    onChange: (e)=>{
                                                        handleTokenSelect(e);
                                                    },
                                                    name: "Tokens",
                                                    id: "",
                                                    children: [
                                                        " ",
                                                        selectToken,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                            className: "live-token-price",
                                            children: currentTokenPrice
                                        }),
                                        /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                            className: "inputGroup",
                                            children: /*#__PURE__*/ (0, $5OpyM$jsxs)("button", {
                                                onClick: makePayment,
                                                children: [
                                                    !isLoading && btnName,
                                                    isLoading && /*#__PURE__*/ (0, $5OpyM$jsxs)("div", {
                                                        className: "spinner",
                                                        children: [
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar1"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar2"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar3"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar4"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar5"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar6"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar7"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar8"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar9"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar10"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar11"
                                                            }),
                                                            /*#__PURE__*/ (0, $5OpyM$jsx)("div", {
                                                                className: "bar12"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, $5OpyM$jsx)((0, $5OpyM$ToastContainer), {})
        ]
    });
}
var $c3da8292154b5c08$export$2e2bcd8739ae039 = $c3da8292154b5c08$var$EVMComponent;



 // export * from './Constants/StarknetConstat'


export {$c3da8292154b5c08$export$2e2bcd8739ae039 as EVMConnect, $d896c950a751df0f$export$5c2c3f7af123bc40 as TokenAddress, $d896c950a751df0f$export$c3f32f9b7c2f46bb as Chains, $d896c950a751df0f$export$8e1e81ac145e31be as Tokens, $d896c950a751df0f$export$89843982d7e60b14 as ERC20_ABI};
//# sourceMappingURL=module.js.map
