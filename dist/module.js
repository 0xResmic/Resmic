import "./main.css";
import {jsxs as $erTRO$jsxs, Fragment as $erTRO$Fragment, jsx as $erTRO$jsx} from "react/jsx-runtime";
import $erTRO$axios from "axios";
import {useState as $erTRO$useState} from "react";
import {ethers as $erTRO$ethers} from "ethers";
import {toast as $erTRO$toast, ToastContainer as $erTRO$ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider as $erTRO$Provider, Contract as $erTRO$Contract, CallData as $erTRO$CallData, cairo as $erTRO$cairo} from "starknet";
import {connect as $erTRO$connect} from "get-starknet";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




/**
 * Supported {Verified } ERC 20 token address
 */ const $6d67af5852dc7129$export$5c2c3f7af123bc40 = {
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
        // "BSC-USD": "0x55d398326f99059fF775485246999027B3197955",
        "USDT": "0x55d398326f99059fF775485246999027B3197955",
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
const $6d67af5852dc7129$export$c3f32f9b7c2f46bb = {
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
const $6d67af5852dc7129$export$8e1e81ac145e31be = {
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
    // BNB:{"dname":"BNB","name":'BNB','type':'unstable', 'id':'0x38'},
    BNB: {
        "dname": "BNB",
        "name": "binancecoin",
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
const $6d67af5852dc7129$export$89843982d7e60b14 = [
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


var $ec82249468484c78$exports = {};
$ec82249468484c78$exports = new URL("resmiclogo.4179cff7.png", import.meta.url).toString();





async function $308113e63523bea8$export$43158100a9ac6874() {
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
async function $308113e63523bea8$export$f3473d805e486329(networkId) {
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
async function $308113e63523bea8$export$57632def5536cb24() {
    const provider = new (0, $erTRO$ethers).providers.Web3Provider(window.ethereum);
    return provider;
}
async function $308113e63523bea8$export$c128ec6fd8bee8d4() {
    const provider = new (0, $erTRO$ethers).providers.Web3Provider(window.ethereum);
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
 */ function $92fb4e7e55ff3fda$var$EVMConnect({ Address: Address, Tokens: Tokens, Chains: Chains, Amount: Amount, Style: Style = {
    displayName: "Make Payment",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"
}, setPaymentStatus: setPaymentStatus, noOfBlockConformation: noOfBlockConformation = 3 }) {
    const [selectedToken, setSelectedToken] = (0, $erTRO$useState)(null);
    const [selectedChain, setSelectedChain] = (0, $erTRO$useState)(null);
    const [userAddress, setUserAddress] = (0, $erTRO$useState)();
    const [isPaymentCompleted, setIsPaymentCompleted] = (0, $erTRO$useState)(false);
    const [currentTokenPrice, setCurrentTokenPrice] = (0, $erTRO$useState)(""); // To display the conversion rate for token.
    const [isConnected, setIsConnected] = (0, $erTRO$useState)(false);
    const [btnName, setBtnName] = (0, $erTRO$useState)("Connect Wallet");
    const [isPopupOpen, setIsPopupOpen] = (0, $erTRO$useState)(false);
    const [isLoading, setIsLoading] = (0, $erTRO$useState)(false);
    const [calculatedAmount, setCalculatedAmount] = (0, $erTRO$useState)(0);
    // Select Blockchain dropdown selection menu.
    let selectChain = Chains.map((chain)=>{
        return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
            children: [
                /*#__PURE__*/ (0, $erTRO$jsx)("option", {
                    value: "",
                    disabled: true,
                    selected: true,
                    hidden: true,
                    children: "Select Blockchain"
                }),
                /*#__PURE__*/ (0, $erTRO$jsxs)("option", {
                    value: chain === null || chain === void 0 ? void 0 : chain.name,
                    children: [
                        " ",
                        /*#__PURE__*/ (0, $erTRO$jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($ec82249468484c78$exports))),
                            alt: ""
                        }),
                        chain === null || chain === void 0 ? void 0 : chain.name,
                        " "
                    ]
                }, chain === null || chain === void 0 ? void 0 : chain.name)
            ]
        });
    });
    // Select Token dropdown selection menu.
    let selectToken = Tokens.map((token)=>{
        return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
            children: [
                /*#__PURE__*/ (0, $erTRO$jsx)("option", {
                    value: "",
                    disabled: true,
                    selected: true,
                    hidden: true,
                    children: "Select Token"
                }),
                /*#__PURE__*/ (0, $erTRO$jsxs)("option", {
                    value: token === null || token === void 0 ? void 0 : token.dname,
                    children: [
                        " ",
                        token === null || token === void 0 ? void 0 : token.dname
                    ]
                }, token === null || token === void 0 ? void 0 : token.dname)
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
            let fetchUrl = await (0, $erTRO$axios).get(url);
            let currentUsdPrice = fetchUrl.data[token]["usd"];
            return currentUsdPrice;
        } catch (error) {
            // alert("Error while getting token price");
            (0, $erTRO$toast).error("Unable to fetch live price!", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
        let connectFunc = await (0, $308113e63523bea8$export$43158100a9ac6874)(); // Calling connect function from Constant/ConnectMeta
        setUserAddress(connectFunc.account); // Returns the connected wallet address.
        setBtnName("Make Payment");
        setIsLoading(false);
        // if(connectFunc.chainId != getChainData[selectedChain]){ // connectFunc.chainId -> Returns the current connected chain
        if (connectFunc.chainId !== selectedChain.id) {
            // connectFunc.chainId -> Returns the current connected chain
            setBtnName("Switching network");
            setIsLoading(true);
            await (0, $308113e63523bea8$export$f3473d805e486329)(selectedChain.id);
            setIsConnected(true);
            setIsLoading(false);
            setBtnName("Make Payment");
            return true;
        } else {
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
        const signer = await (0, $308113e63523bea8$export$c128ec6fd8bee8d4)();
        try {
            /**
       * The ERC20 payment requires 2 transactions
       * 1. Approval of token
       * 2. Transafer of token
       */ const contractInstance = new (0, $erTRO$ethers).Contract(_tokenAddress, (0, $6d67af5852dc7129$export$89843982d7e60b14), signer);
            let decimals = await contractInstance.decimals();
            decimals = decimals.toString();
            const getApprove = await contractInstance.approve(userAddress, (_amount * 10 ** decimals).toString());
            await getApprove.wait();
            // alert("Token approved successfully:)"); 
            (0, $erTRO$toast).success("Token approved", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            let tx = await contractInstance.transferFrom(userAddress, Address, (_amount * 10 ** decimals).toString(), {
                gasLimit: 100000
            });
            await tx.wait();
            await checkBlockConformations(tx.hash, decimals);
        } catch (error) {
            (0, $erTRO$toast).error("Something went wrong.", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
        setIsLoading(true);
        const signer = await (0, $308113e63523bea8$export$c128ec6fd8bee8d4)();
        let amount = _amount;
        let slicedNum = amount.toFixed(10); // Rounding it to 10 digits.
        let amountInWei = (0, $erTRO$ethers).utils.parseEther(slicedNum.toString()); // Converting the amount to WEI {Smallest amount of ETH (1 ETH = 10 ** 18)}
        try {
            // Transfer of funds to address
            const tx = await signer.sendTransaction({
                to: Address,
                value: amountInWei
            });
            await tx.wait();
            await checkBlockConformationsNative(tx.hash, _amount);
        } catch (error) {
            (0, $erTRO$toast).error("Something went wrong.", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
   */ const checkBlockConformations = async (tx, decimals, _amount)=>{
        let provider = await (0, $308113e63523bea8$export$57632def5536cb24)();
        const confirmationsRequired = noOfBlockConformation;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
        // Checks the status of the transaction
        if (receipt.status === 1) {
            let actualTokenTransfer = await checkTokenTransfers(tx);
            if (actualTokenTransfer !== "0") {
                let _amount = parseFloat(actualTokenTransfer);
                // Slippage of 0.1% for the trade.
                let slippage = 0.1 * Amount / 100;
                let minimumAmount = Amount - slippage;
                // if (_amount / (10 ** decimals).toString() >= Amount) {
                if (_amount / (10 ** decimals).toString() >= minimumAmount) {
                    setIsPaymentCompleted(true);
                    setPaymentStatus(true);
                    (0, $erTRO$toast).success("Payment done successfully.", {
                        position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    setIsLoading(false);
                    setIsPopupOpen(false);
                    return true;
                } else {
                    (0, $erTRO$toast).error("Something went wrong.", {
                        position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    console.log("Not sufficient amount transferred: ");
                    return false;
                }
            } else {
                (0, $erTRO$toast).error("Unable to process payment\n Please try again", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return false;
            }
        } else {
            (0, $erTRO$toast).error("Transaction failed to be processed", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
        let provider = await (0, $308113e63523bea8$export$57632def5536cb24)();
        try {
            const transactionReceipt = await provider.getTransactionReceipt(transactionHash);
            if (transactionReceipt && transactionReceipt.status === 1) {
                const tokenContract = new (0, $erTRO$ethers).Contract((0, $6d67af5852dc7129$export$5c2c3f7af123bc40)[selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.name][selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.dname], (0, $6d67af5852dc7129$export$89843982d7e60b14), provider);
                const filter = tokenContract.filters.Transfer(null, null, null);
                const events = await tokenContract.queryFilter(filter, transactionReceipt.blockNumber, transactionReceipt.blockNumber);
                const event = events.find((event)=>event.transactionHash === transactionHash);
                if (event) {
                    const amount = event.args.value.toString();
                    return amount;
                } else {
                    (0, $erTRO$toast).error("No token transfer event found for the tx.", {
                        position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    return "0";
                }
            } else {
                (0, $erTRO$toast).error("Transaction not found or not successful.", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return "0";
            }
        } catch (error) {
            console.error("Error reading transaction details:", error);
            (0, $erTRO$toast).error("No transaction found!", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
   */ const checkBlockConformationsNative = async (tx, _amount)=>{
        let provider = await (0, $308113e63523bea8$export$57632def5536cb24)();
        const confirmationsRequired = noOfBlockConformation;
        const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
        if (receipt.status === 1) {
            let actualTokenTransfer = await checkTokenTransfersNative(tx);
            actualTokenTransfer = parseFloat(actualTokenTransfer);
            let currentTokenPrice2 = await getCurrentTokenPrice(selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name);
            currentTokenPrice2 = Amount / currentTokenPrice2;
            // Slippage of 0.8% for the trade.
            let slippage = 0.1 * _amount / 100;
            let minimumAmount = _amount - slippage;
            if (actualTokenTransfer !== 0) {
                // if (actualTokenTransfer >= currentTokenPrice2) { // v@1.0.7 Slippage added.
                if (actualTokenTransfer >= minimumAmount) {
                    setPaymentStatus(true);
                    setIsPaymentCompleted(true);
                    (0, $erTRO$toast).success("Payment done successfully:)", {
                        position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    setIsLoading(false);
                    setIsPopupOpen(false);
                    return true;
                } else {
                    (0, $erTRO$toast).error("Something went wrong", {
                        position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                        theme: "dark"
                    });
                    return false;
                }
            } else {
                (0, $erTRO$toast).error("Unable to process payment\n Please try again ", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return false;
            }
        } else {
            (0, $erTRO$toast).error("Transaction failed to be processed", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
        let provider = await (0, $308113e63523bea8$export$57632def5536cb24)();
        try {
            // Get the transaction details
            const transaction = await provider.getTransaction(tx);
            if (transaction && transaction.confirmations > 0) {
                const amountInWei = transaction.value;
                const amountInEther = (0, $erTRO$ethers).utils.formatEther(amountInWei);
                return amountInEther.toString();
            } else {
                (0, $erTRO$toast).error("Transaction not found", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return "0";
            }
        } catch (error) {
            (0, $erTRO$toast).error("Unable to get transaction details", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
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
        if ((selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.dname) == null || (selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.name) == null) (0, $erTRO$toast).warning("Please select the payment mode", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        else {
            await connectWalletFunc();
            setBtnName("Make payment");
            if (isConnected) {
                // Stable Coins.
                if (selectedToken.type === "stable") {
                    setCalculatedAmount(Amount);
                    requestERC20Payment(Amount, (0, $6d67af5852dc7129$export$5c2c3f7af123bc40)[selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.name][selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.dname]);
                } else if ((selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.id) === (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.id)) {
                    let latestPrice = await getCurrentTokenPrice(selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name); // Returns Float/Int of the current market price of the token. //@note using .name only for the MATIC to fetch the live price.
                    let latestAmount = Amount / latestPrice;
                    setCalculatedAmount(latestAmount);
                    nativeTokenPayment(latestAmount);
                } else {
                    let latestPrice = await getCurrentTokenPrice(selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name);
                    let latestAmount = Amount / latestPrice;
                    setCalculatedAmount(latestAmount);
                    requestERC20Payment(latestAmount, (0, $6d67af5852dc7129$export$5c2c3f7af123bc40)[selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.name][selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name]);
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
    };
    const handleTokenSelect = async (e)=>{
        // const filteredArray = Tokens.filter((obj) => obj?.name === e.target.value); // Error V @1.0.7
        const filteredArray = Tokens.filter((obj)=>{
            return (obj === null || obj === void 0 ? void 0 : obj.dname) === e.target.value;
        });
        const token = filteredArray[0];
        let tokenPrice = "1";
        if ((token === null || token === void 0 ? void 0 : token.type) !== "stable") {
            if ((token === null || token === void 0 ? void 0 : token.name) === "MATIC") tokenPrice = await getCurrentTokenPrice("matic-network");
            else tokenPrice = await getCurrentTokenPrice(token === null || token === void 0 ? void 0 : token.name);
        }
        setCurrentTokenPrice("1 " + (token === null || token === void 0 ? void 0 : token.dname) + " = $ " + tokenPrice);
        setSelectedToken(token);
    };
    const handleChainSelect = (e)=>{
        const filteredArray = Chains.filter((obj)=>{
            return (obj === null || obj === void 0 ? void 0 : obj.name) === e.target.value;
        });
        setSelectedChain(filteredArray[0]);
    };
    return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
        children: [
            /*#__PURE__*/ (0, $erTRO$jsx)("button", {
                style: Style,
                onClick: handleOpenPopup,
                children: Style === null || Style === void 0 ? void 0 : Style.displayName
            }),
            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                children: isPopupOpen && /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                    className: "popup-container",
                    children: /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                        className: "popup-content",
                        children: [
                            /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                className: "resmic-logo",
                                children: [
                                    /*#__PURE__*/ (0, $erTRO$jsx)("img", {
                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($ec82249468484c78$exports))),
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                        className: "close",
                                        onClick: handleClosePopup,
                                        children: "\xd7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                className: "modal-contents",
                                children: /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                    className: "inputs",
                                    children: [
                                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                            className: "popup-heading",
                                            children: [
                                                /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                                    children: "Pay amount"
                                                }),
                                                /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                                    className: "amount",
                                                    children: [
                                                        "$",
                                                        Amount.toFixed(2)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                            className: "inputGroup",
                                            children: [
                                                /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                    className: "inputHeading",
                                                    children: /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                                        children: "Blockchain"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $erTRO$jsxs)("select", {
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
                                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                            className: "inputGroup",
                                            children: [
                                                /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                    className: "inputHeading",
                                                    children: /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                                        children: "Token"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $erTRO$jsxs)("select", {
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
                                        /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                            className: "live-token-price",
                                            children: currentTokenPrice
                                        }),
                                        /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                            className: "inputGroup",
                                            children: /*#__PURE__*/ (0, $erTRO$jsxs)("button", {
                                                onClick: makePayment,
                                                children: [
                                                    !isLoading && btnName,
                                                    isLoading && /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                                        className: "spinner",
                                                        children: [
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar1"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar2"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar3"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar4"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar5"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar6"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar7"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar8"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar9"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar10"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                className: "bar11"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
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
            /*#__PURE__*/ (0, $erTRO$jsx)((0, $erTRO$ToastContainer), {})
        ]
    });
}
var $92fb4e7e55ff3fda$export$2e2bcd8739ae039 = $92fb4e7e55ff3fda$var$EVMConnect;









async function $d0fbc2f49774b49e$export$43158100a9ac6874() {
    try {
        let con = await (0, $erTRO$connect)();
        return con;
    } catch (error) {
        console.log(error);
        (0, $erTRO$toast).error("Unable to connect wallet.", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
    }
}


const $07aa7dcd269bb737$export$3dd05bcec6d502 = {
    "Ethereum": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    "DAI": "0x0dA114221cb83fa859DBdb4C44bEeaa0BB37C7537ad5ae66Fe5e0efD20E6eB3",
    "USD": "0x053C91253BC9682c04929cA02ED00b3E423f6710D2ee7e0D5EBB06F3eCF368A8",
    "USDT": "0x68F5c6a61780768455de69077E07e89787839bf8166dEcfBf92B645209c0fB8",
    "WBTC": "0x3Fe2b97C1Fd336E750087D68B9b867997Fd64a2661fF3ca5A7C771641e8e7AC"
};
const $07aa7dcd269bb737$export$abf328e0fa55cf1f = {
    USDT: {
        "name": "USDT",
        "type": "stable",
        "id": "-1",
        "img": "url"
    },
    USDC: {
        "name": "USDC",
        "type": "stable",
        "id": "-1"
    },
    ETH: {
        "name": "Ethereum",
        "type": "unstable",
        "id": "0x1"
    },
    GETH: {
        "name": "Ethereum",
        "type": "unstable",
        "id": "0x5"
    },
    Bitcoin: {
        "name": "Bitcoin",
        "type": "unstable",
        "id": "-1",
        "img": "https://bitcoin.org/img/icons/logotop.svg?1693519667"
    }
};
const $07aa7dcd269bb737$export$3765b2c107be43ec = [
    {
        "members": [
            {
                "name": "low",
                "offset": 0,
                "type": "felt"
            },
            {
                "name": "high",
                "offset": 1,
                "type": "felt"
            }
        ],
        "name": "Uint256",
        "size": 2,
        "type": "struct"
    },
    {
        "data": [
            {
                "name": "from_",
                "type": "felt"
            },
            {
                "name": "to",
                "type": "felt"
            },
            {
                "name": "value",
                "type": "Uint256"
            }
        ],
        "keys": [],
        "name": "Transfer",
        "type": "event"
    },
    {
        "data": [
            {
                "name": "owner",
                "type": "felt"
            },
            {
                "name": "spender",
                "type": "felt"
            },
            {
                "name": "value",
                "type": "Uint256"
            }
        ],
        "keys": [],
        "name": "Approval",
        "type": "event"
    },
    {
        "inputs": [
            {
                "name": "name",
                "type": "felt"
            },
            {
                "name": "symbol",
                "type": "felt"
            },
            {
                "name": "decimals",
                "type": "felt"
            },
            {
                "name": "initial_supply",
                "type": "Uint256"
            },
            {
                "name": "recipient",
                "type": "felt"
            }
        ],
        "name": "constructor",
        "outputs": [],
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "name",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "symbol",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "totalSupply",
                "type": "Uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "decimals",
                "type": "felt"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "account",
                "type": "felt"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "Uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "owner",
                "type": "felt"
            },
            {
                "name": "spender",
                "type": "felt"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
                "type": "Uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "recipient",
                "type": "felt"
            },
            {
                "name": "amount",
                "type": "Uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "sender",
                "type": "felt"
            },
            {
                "name": "recipient",
                "type": "felt"
            },
            {
                "name": "amount",
                "type": "Uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "spender",
                "type": "felt"
            },
            {
                "name": "amount",
                "type": "Uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "spender",
                "type": "felt"
            },
            {
                "name": "added_value",
                "type": "Uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "spender",
                "type": "felt"
            },
            {
                "name": "subtracted_value",
                "type": "Uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "name": "success",
                "type": "felt"
            }
        ],
        "type": "function"
    }
];






/**
 * 
 * @param {String} Address Wallet Address that will be receiving the funds
 * @param {Array} Tokens Array of tokens to accept funds in
 * @param {Number} Amount Amount in USD
 * @param {bool} setPaymentStatus returns boolean indicating payment status
 * @param {CSS} Style CSS component for the button 
 */ function $47e24e906c7fe2d5$var$StarkNetConnect({ Address: Address, Tokens: Tokens, Amount: Amount, setPaymentStatus: setPaymentStatus, Style: Style = {
    displayName: "Make Payment",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"
} }) {
    const [selectedToken, setSelectedToken] = (0, $erTRO$useState)(null);
    const [isConnected, setIsConnected] = (0, $erTRO$useState)(false);
    const [starknetObject, setStarknetObject] = (0, $erTRO$useState)();
    const [userAddress, setUserAddress] = (0, $erTRO$useState)();
    const [providerUrl, setProviderUrl] = (0, $erTRO$useState)();
    const [isPopupOpen, setIsPopupOpen] = (0, $erTRO$useState)(false);
    const [isLoading, setIsLoading] = (0, $erTRO$useState)(false);
    const [currentAmount, setCurrentAmount] = (0, $erTRO$useState)();
    const [currentTokenPrice, setCurrentTokenPrice] = (0, $erTRO$useState)(""); // To display the conversion rate for token.
    const [btnName, setBtnName] = (0, $erTRO$useState)("Make Payment");
    // Select Token dropdown selection menu.
    let selectToken = Tokens.map((token)=>{
        return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
            children: [
                /*#__PURE__*/ (0, $erTRO$jsx)("option", {
                    value: "",
                    disabled: true,
                    selected: true,
                    hidden: true,
                    children: "Select Token"
                }),
                /*#__PURE__*/ (0, $erTRO$jsxs)("option", {
                    value: token === null || token === void 0 ? void 0 : token.name,
                    children: [
                        " ",
                        token === null || token === void 0 ? void 0 : token.name
                    ]
                }, token === null || token === void 0 ? void 0 : token.name)
            ]
        });
    });
    /**
     * Connect dApp to the StarkNet available Wallet.
     */ const connectStarknetWallet = async ()=>{
        var _connect_account, _connect_account1, _connect_account_provider;
        setIsLoading(true);
        let connect = await (0, $d0fbc2f49774b49e$export$43158100a9ac6874)();
        setStarknetObject(connect);
        setUserAddress(connect === null || connect === void 0 ? void 0 : (_connect_account = connect.account) === null || _connect_account === void 0 ? void 0 : _connect_account.address);
        // setProviderUrl(connect?.provider?.gatewayUrl)
        setProviderUrl(connect === null || connect === void 0 ? void 0 : (_connect_account1 = connect.account) === null || _connect_account1 === void 0 ? void 0 : (_connect_account_provider = _connect_account1.provider) === null || _connect_account_provider === void 0 ? void 0 : _connect_account_provider.baseUrl);
        setIsConnected(true);
        setIsLoading(false);
    // console.log(connect?.account?.address);
    // console.log(connect?.provider);
    };
    /**
     * Fetches current market price of token.
     * @param {String} _token Token name, e.b. "Ethereum"
     * @returns {Number} Returns current USD value of input token.
     */ const getCurrentTokenPrice = async (_token)=>{
        let token = _token.toLowerCase();
        try {
            let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;
            let fetchUrl = await (0, $erTRO$axios).get(url);
            let currentUsdPrice = fetchUrl.data[token]["usd"];
            // console.log(currentUsdPrice)
            return currentUsdPrice;
        } catch (error) {
            // alert("Error while getting token price")
            (0, $erTRO$toast).error("Unable to fetch live price!", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            console.log(error.message);
        }
    };
    /**
     * 
     * @param {Number} latestAmount Calculated current amount of token
     * @param {String} _selectedToken ERC20 token address  
     */ const requestERC20Payment = async (latestAmount, _selectedToken)=>{
        setIsLoading(true);
        // console.log("selectedToken", StarknetTokenAddress[_selectedToken])
        const provider = new (0, $erTRO$Provider)({
            sequencer: {
                baseUrl: providerUrl
            }
        });
        const contractInstance = new (0, $erTRO$Contract)((0, $07aa7dcd269bb737$export$3765b2c107be43ec), (0, $07aa7dcd269bb737$export$3dd05bcec6d502)[_selectedToken], provider);
        let _contractAddress = (0, $07aa7dcd269bb737$export$3dd05bcec6d502)[_selectedToken];
        let decimal = await contractInstance.decimals();
        decimal = decimal.decimals.toString();
        let _latestAmount = latestAmount * 10 ** parseInt(decimal);
        setCurrentAmount(_latestAmount);
        try {
            // Two functionality in a transaction.
            // 1. The token will be approved by the user
            // 2. The actual payment will be completed.
            setBtnName("Approving ...");
            let approveTokens = await starknetObject.account.execute({
                contractAddress: _contractAddress,
                entrypoint: "approve",
                calldata: (0, $erTRO$CallData).compile({
                    recipient: userAddress,
                    // amount: cairo.uint256(_latestAmount)
                    amount: (0, $erTRO$cairo).uint256(parseInt(_latestAmount.toString()))
                })
            });
            await provider.waitForTransaction(approveTokens.transaction_hash);
            console.log("approveTokens", approveTokens);
            console.log("approveTokens.transaction_hash", approveTokens.transaction_hash);
            // alert("Token approved!");
            (0, $erTRO$toast).success("Token approved", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            setBtnName("Make payment");
            let transferToken = await starknetObject.account.execute({
                contractAddress: _contractAddress,
                entrypoint: "transfer",
                calldata: (0, $erTRO$CallData).compile({
                    recipient: Address,
                    amount: (0, $erTRO$cairo).uint256(parseInt(_latestAmount.toString()))
                })
            });
            await provider.waitForTransaction(transferToken.transaction_hash);
            await verifyTransaction(transferToken.transaction_hash, _latestAmount);
            // alert("Token transferred successfully :)");
            (0, $erTRO$toast).success("Token transferred successfully", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            setBtnName("Payment Done");
            setPaymentStatus(true);
            setIsLoading(false);
            setIsPopupOpen(false);
        } catch (error) {
            console.log(error);
            // alert("Unable to make payment!")
            (0, $erTRO$toast).error("Unable to make payment!", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
        }
    };
    /**
     * 
     * @param {String} _txHash Transaction hash after the payment.
     * @param {Number} _latestAmount Amount of tokens calculated at current rate.
     * @returns 
     */ const verifyTransaction = async (_txHash, _latestAmount)=>{
        let verificationStatue = false;
        const provider = new (0, $erTRO$Provider)({
            sequencer: {
                baseUrl: providerUrl
            }
        });
        const contractInstance = new (0, $erTRO$Contract)((0, $07aa7dcd269bb737$export$3765b2c107be43ec), (0, $07aa7dcd269bb737$export$3dd05bcec6d502)[selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name], provider);
        let Receipt = await provider.getTransactionReceipt(_txHash);
        let tx = Receipt.events;
        let tokenAddressOfTransferToken = tx[0].from_address; // ERC20_Token Address
        let tokenTransferedFromAddress = tx[0].data[0] // userAddress
        ;
        let tokenTransferedToAddress = tx[0].data[1] // It should be our address.
        ;
        let tokenTransferedAmount = tx[0].data[2] // Amount
        ;
        tokenTransferedAmount = parseInt(tokenTransferedAmount.toString(16));
        let _amount = parseInt(_latestAmount.toString());
        if (tokenTransferedAmount >= _amount && tokenTransferedToAddress.toLowerCase() === Address.toLowerCase() && tokenTransferedFromAddress.toLowerCase() === userAddress.toLowerCase() && tokenAddressOfTransferToken.toLowerCase() === (0, $07aa7dcd269bb737$export$3dd05bcec6d502)[selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name].toLowerCase()) verificationStatue = true;
        return verificationStatue;
    };
    /**
     * Super function to call all the functions in sync.
     */ const makePayment = async ()=>{
        if ((selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name) == null) // alert("Please select the payment mode")
        (0, $erTRO$toast).warning("Please select the payment mode", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        else {
            await connectStarknetWallet();
            setBtnName(`Pay ${selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name}`);
            if (isConnected) {
                if ((selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name) === "stable") {
                    setCurrentAmount(Amount);
                    requestERC20Payment(Amount, selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name);
                } else {
                    let latestPrice = await getCurrentTokenPrice(selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name);
                    let latestAmount = Amount / latestPrice;
                    requestERC20Payment(latestAmount, selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.name);
                }
            } else await connectStarknetWallet();
        }
    };
    /**
     * Helper functions.
     */ const handleOpenPopup = ()=>{
        setIsPopupOpen(true);
    };
    const handleClosePopup = ()=>{
        setIsPopupOpen(false);
        setIsLoading(!isLoading);
    };
    const handelSelectToken = async (e)=>{
        const filteredArray = Tokens.filter((obj)=>obj.name === e.target.value);
        const token = filteredArray[0];
        let tokenPrice = "1";
        if (token.type !== "stable") tokenPrice = await getCurrentTokenPrice(token.name);
        setSelectedToken(token);
        setCurrentTokenPrice("1 " + token.name + " = $ " + tokenPrice);
    // console.log("token", token)
    };
    return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
        children: [
            /*#__PURE__*/ (0, $erTRO$jsx)("button", {
                style: Style,
                onClick: handleOpenPopup,
                children: Style === null || Style === void 0 ? void 0 : Style.displayName
            }),
            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                children: isPopupOpen && /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                    className: "popup-container",
                    children: /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                        className: "popup-content",
                        children: [
                            /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                className: "resmic-logo",
                                children: [
                                    /*#__PURE__*/ (0, $erTRO$jsx)("img", {
                                        src: (0, (/*@__PURE__*/$parcel$interopDefault($ec82249468484c78$exports))),
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                        className: "close",
                                        onClick: handleClosePopup,
                                        children: "\xd7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                className: "modal-contents",
                                children: /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                    className: "inputs",
                                    children: [
                                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                            className: "popup-heading",
                                            children: [
                                                /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                                    children: "Pay amount"
                                                }),
                                                /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                                    className: "amount",
                                                    children: [
                                                        "$",
                                                        Amount.toFixed(2)
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                            className: "inputGroup",
                                            children: [
                                                /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                    className: "inputHeading",
                                                    children: /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                                        children: "Token"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0, $erTRO$jsxs)("select", {
                                                    onChange: (e)=>{
                                                        handelSelectToken(e);
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
                                        /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                            className: "live-token-price",
                                            children: currentTokenPrice
                                        }),
                                        /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                            className: "inputGroup",
                                            children: /*#__PURE__*/ (0, $erTRO$jsxs)("button", {
                                                onClick: makePayment,
                                                children: [
                                                    !isLoading && btnName,
                                                    isLoading && /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                                        class: "spinner",
                                                        children: [
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar1"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar2"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar3"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar4"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar5"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar6"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar7"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar8"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar9"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar10"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar11"
                                                            }),
                                                            /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                                                                class: "bar12"
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
            })
        ]
    });
}
var $47e24e906c7fe2d5$export$2e2bcd8739ae039 = $47e24e906c7fe2d5$var$StarkNetConnect;






export {$92fb4e7e55ff3fda$export$2e2bcd8739ae039 as EVMConnect, $47e24e906c7fe2d5$export$2e2bcd8739ae039 as StarkNetConnect, $6d67af5852dc7129$export$c3f32f9b7c2f46bb as Chains, $6d67af5852dc7129$export$8e1e81ac145e31be as Tokens, $07aa7dcd269bb737$export$abf328e0fa55cf1f as StarkTokens};
//# sourceMappingURL=module.js.map
