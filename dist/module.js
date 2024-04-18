import "./main.css";
import {jsxs as $erTRO$jsxs, Fragment as $erTRO$Fragment, jsx as $erTRO$jsx} from "react/jsx-runtime";
import {useState as $erTRO$useState} from "react";
import {toast as $erTRO$toast, ToastContainer as $erTRO$ToastContainer} from "react-toastify";
import {ethers as $erTRO$ethers} from "ethers";
import $erTRO$bignumberjs from "bignumber.js";
import "react-toastify/dist/ReactToastify.css";
import $erTRO$axios from "axios";
import {Contract as $erTRO$Contract, CallData as $erTRO$CallData, cairo as $erTRO$cairo} from "starknet";
import {connect as $erTRO$connect} from "get-starknet";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



var $ec82249468484c78$exports = {};
$ec82249468484c78$exports = new URL("resmiclogo.4179cff7.png", import.meta.url).toString();


const $535c395a1d197c28$export$d59696070647f03c = [
    "Ethereum",
    "Polygon",
    "Starknet",
    "Binance",
    "Optimism",
    "Sepolia",
    "Nibiru"
];
const $535c395a1d197c28$export$c12d5eb7df2a872c = {
    // EVM Blockchains. 
    "Ethereum": [
        "ETH",
        "USDT",
        "USDC",
        "MATIC",
        "DOGE"
    ],
    "Polygon": [
        "MATIC",
        "USDT",
        "USDC",
        "ETH",
        "DOGE"
    ],
    "Binance": [
        "BNB",
        "BUSD",
        "USDC",
        "ETH",
        "DOGE"
    ],
    "Binance-TestNet": [
        "BNB",
        "BUSD",
        "USDC",
        "ETH",
        "DOGE"
    ],
    "Optimism": [
        "OP",
        "USDT",
        "USDC",
        "ETH",
        "MATIC",
        "DOGE"
    ],
    "Sepolia": [
        "SETH",
        "USDT",
        "BNB",
        "DAI"
    ],
    // Non-EVM Blockchains.
    "Starknet": [
        "STARK",
        "USDT",
        "USDC",
        "ETH",
        "GETH",
        "BTC"
    ],
    "Nibiru": [
        "NIBI",
        "BTC",
        "ETH"
    ],
    "": [
        ""
    ]
};
const $535c395a1d197c28$export$c3f32f9b7c2f46bb = {
    "Ethereum": {
        "name": "Ethereum",
        "description": "",
        "id": "0x1",
        "img": ""
    },
    "Polygon": {
        "name": "Polygon",
        "description": "",
        "id": "0x89",
        "img": ""
    },
    "Binance": {
        "name": "Binance",
        "description": "",
        "id": "0x38",
        "img": ""
    },
    "Binance-TestNet": {
        "name": "Binance",
        "description": "",
        "id": "0x61",
        "img": ""
    },
    "Optimism": {
        "name": "Optimism",
        "description": "",
        "id": "0xa",
        "img": ""
    },
    "Sepolia": {
        "name": "Sepolia",
        "description": "",
        "id": "0xaa36a7",
        "img": ""
    },
    "Starknet": {
        "name": "Starknet",
        "description": "",
        "id": "",
        "img": ""
    },
    "Nibiru": {
        "name": "Nibiru",
        "description": "",
        "id": "",
        "img": ""
    }
};
const $535c395a1d197c28$export$8e1e81ac145e31be = {
    // If Tokens is stable conin, id == chainId to identify is it native token. else -1
    USDT: {
        "name": "USDT",
        "dname": "USDT",
        "type": "stable",
        "id": "-1",
        "description": ""
    },
    BUSD: {
        "name": "BUSD",
        "dname": "BUSDT",
        "type": "stable",
        "id": "-1"
    },
    USDC: {
        "name": "USDC",
        "dname": "USDC",
        "type": "stable",
        "id": "-1"
    },
    PUSH: {
        "name": "PUSH",
        "dname": "push",
        "type": "unstable",
        "id": ""
    },
    MATIC: {
        "name": "MATIC",
        "dname": "matic-network",
        "type": "unstable",
        "id": "0x89"
    },
    ETH: {
        "name": "ETH",
        "dname": "ethereum",
        "type": "unstable",
        "id": "0x1"
    },
    SETH: {
        "name": "SETH",
        "dname": "ethereum",
        "type": "unstable",
        "id": "0xaa36a7"
    },
    NIBI: {
        "name": "NIBI",
        "dname": "nibiru",
        "type": "unstable",
        "id": ""
    },
    DOGE: {
        "name": "DOGE",
        "dname": "doge",
        "type": "unstable",
        "id": ""
    },
    STARK: {
        "name": "STARK",
        "dname": "starknet",
        "type": "unstable",
        "id": ""
    },
    BNB: {
        "name": "BNB",
        "dname": "binancecoin",
        "type": "unstable",
        "id": "0x38"
    },
    TBNB: {
        "name": "TBNB",
        "dname": "binancecoin",
        "type": "unstable",
        "id": "0x61"
    },
    BTC: {
        "name": "BTC",
        "dname": "Bitcoin",
        "type": "unstable",
        "id": ""
    },
    DAI: {
        "name": "DAI",
        "dname": "bitcoin",
        "type": "unstable",
        "id": ""
    }
};
const $535c395a1d197c28$export$5c2c3f7af123bc40 = {
    "Ethereum": {
        "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "DAI": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        "Bitcoin": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "MATIC": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    },
    "Polygon": {
        "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        "USDC": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "DAI": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        "BUSD": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
        "Bitcoin": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        "BNB": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
        "ETH": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
    },
    "Binance": {
        "BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "DAI": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        // "BSC-USD": "0x55d398326f99059fF775485246999027B3197955",
        "USDT": "0x55d398326f99059fF775485246999027B3197955",
        "USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "DOGE": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        "MATIC": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        "ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "BTC": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
    },
    "Optimism": {
        "USDT": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        "USDC": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        "BTC": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
        "DAI": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        "Optimism": "0x4200000000000000000000000000000000000042"
    },
    "Goerli": {
        "USDC": "0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "DAI": "0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33"
    },
    "Sepolia": {
        "USDC": "0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "USDT": "0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "DAI": "0x36e08F3A09fEf0e48261226dcA3084A1FBE20aFe",
        "BNB": "0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33"
    },
    "Starknet": {
        "STARK": "0x4718f5a0Fc34cC1AF16A1cdee98fFB20C31f5cD61D6Ab07201858f4287c938D",
        "ETH": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
        "DAI": "0x0dA114221cb83fa859DBdb4C44bEeaa0BB37C7537ad5ae66Fe5e0efD20E6eB3",
        "USDC": "0x053C91253BC9682c04929cA02ED00b3E423f6710D2ee7e0D5EBB06F3eCF368A8",
        "USDT": "0x68F5c6a61780768455de69077E07e89787839bf8166dEcfBf92B645209c0fB8",
        "WBTC": "0x3Fe2b97C1Fd336E750087D68B9b867997Fd64a2661fF3ca5A7C771641e8e7AC"
    }
};
const $535c395a1d197c28$export$89843982d7e60b14 = [
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
const $535c395a1d197c28$export$3765b2c107be43ec = [
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


// ✅ Connect wallet
// ✅ Switch blockchain
// ✅ Get network details
// ✅ Calculate the tokens.
// ✅ Handling big numbers.
// ✅ Native Tokens
// ✅ Block Confirmations.
// ✅ Stable Coin
// ✅ Approve token
// ✅ Make payment
// ✅ Check Confirmations
// ✅ Return payment status.


async function $f553423f3d0f773a$export$cfaea2bb8d8b8829() {
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
async function $f553423f3d0f773a$export$f3473d805e486329(networkId) {
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
async function $f553423f3d0f773a$export$57632def5536cb24() {
    const provider = new (0, $erTRO$ethers).providers.Web3Provider(window.ethereum);
    return provider;
}
async function $f553423f3d0f773a$export$c128ec6fd8bee8d4() {
    const provider = new (0, $erTRO$ethers).providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
}









const $34c3ac9406e6b976$export$6c774fdbdbcfd895 = async (_token)=>{
    let token = _token.toLowerCase();
    try {
        let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;
        let fetchUrl = await (0, $erTRO$axios).get(url);
        let currentUsdPrice = fetchUrl.data[token]["usd"];
        return currentUsdPrice;
    } catch (error) {
        (0, $erTRO$toast).error("Unable to fetch live price!", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        console.log(error.message);
    }
};


async function $0f9c8968340f6221$export$1213dd6fecdd48f0(Blockchain, Token, Address_, Amount, PaymentConfirmations = 2) {
    let Address = Address_.EVM;
    let paymentStatus = false;
    // Connect Metamask Wallet, Switching network if necessary.
    let connectWallet = await (0, $f553423f3d0f773a$export$cfaea2bb8d8b8829)();
    let connectdUserAddress = connectWallet === null || connectWallet === void 0 ? void 0 : connectWallet.account;
    let connectedchainId = connectWallet === null || connectWallet === void 0 ? void 0 : connectWallet.chainId;
    let requiredChainID = (0, $535c395a1d197c28$export$c3f32f9b7c2f46bb)[Blockchain].id;
    if (connectedchainId !== requiredChainID) await (0, $f553423f3d0f773a$export$f3473d805e486329)(requiredChainID);
    /*
        3 types of transactions
        i. Native tokens
        ii. Stable tokens
        iii. Unstable tokens.
    */ let tokenType = (0, $535c395a1d197c28$export$8e1e81ac145e31be)[Token];
    if ((tokenType === null || tokenType === void 0 ? void 0 : tokenType.id) === requiredChainID) {
        var _Tokens_Token;
        let tokenSymbol = (_Tokens_Token = (0, $535c395a1d197c28$export$8e1e81ac145e31be)[Token]) === null || _Tokens_Token === void 0 ? void 0 : _Tokens_Token.dname;
        let nativePayment = await $0f9c8968340f6221$var$nativeTokenPayment(Amount, Address, tokenSymbol, PaymentConfirmations);
        paymentStatus = nativePayment;
        return nativePayment;
    } else if ((tokenType === null || tokenType === void 0 ? void 0 : tokenType.type) === "stable") {
        console.log("here state is stable");
        let tokenAddress = (0, $535c395a1d197c28$export$5c2c3f7af123bc40);
        tokenAddress = tokenAddress[Blockchain][Token];
        let stableTx = await $0f9c8968340f6221$var$requestERC20Payment(Amount, tokenAddress, connectdUserAddress, Address, PaymentConfirmations);
        paymentStatus = stableTx;
        return stableTx;
    } else if ((tokenType === null || tokenType === void 0 ? void 0 : tokenType.type) === "unstable") {
        var _Tokens_Token1;
        let tokenSymbol = (_Tokens_Token1 = (0, $535c395a1d197c28$export$8e1e81ac145e31be)[Token]) === null || _Tokens_Token1 === void 0 ? void 0 : _Tokens_Token1.dname;
        let tokenAddress = (0, $535c395a1d197c28$export$5c2c3f7af123bc40);
        tokenAddress = tokenAddress[Blockchain][Token];
        // Calculate the amount here.
        let livePrice = await (0, $34c3ac9406e6b976$export$6c774fdbdbcfd895)(tokenSymbol);
        let amount = Amount / livePrice;
        amount = parseFloat(amount);
        let ERC20tx = await $0f9c8968340f6221$var$requestERC20Payment(amount, tokenAddress, connectdUserAddress, Address, PaymentConfirmations);
        paymentStatus = ERC20tx;
        return ERC20tx;
    }
    return paymentStatus;
}
/**
   * Function for Native token transfers.
   * @returns {Bool} Payment Update
*/ const $0f9c8968340f6221$var$nativeTokenPayment = async (_amount, _address, _tokenSymbol, _paymentConfirmations)=>{
    const signer = await (0, $f553423f3d0f773a$export$c128ec6fd8bee8d4)();
    let amount = _amount;
    let liveTokenPrice = await (0, $34c3ac9406e6b976$export$6c774fdbdbcfd895)(_tokenSymbol) // Live token price
    ;
    let decimal = 18;
    let tokenAmount = amount / liveTokenPrice;
    tokenAmount = (0, $erTRO$bignumberjs)(parseInt(tokenAmount * 10 ** decimal));
    tokenAmount = tokenAmount.toFixed();
    try {
        // Transfer of funds to address
        const tx = await signer.sendTransaction({
            to: _address,
            value: tokenAmount
        });
        await tx.wait();
        let paymentUpdate = await $0f9c8968340f6221$var$checkBlockConformationsNative(tx.hash, tokenAmount, _paymentConfirmations, _tokenSymbol);
        return paymentUpdate;
    } catch (error) {
        (0, $erTRO$toast).error("Something went wrong.", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        console.log(error);
        return false;
    }
};
/**
   * Function ckecks the block conformation of the payment on the blockchain for ERC20 token only.
   * The user will wait until the the transaction is confirmed until specified blocks.
   * @param {String} tx // Transaction hash after the payment.
   * @param {INT} _amount
   * @param {INT} _noOfBlockConformation
   * @param {String} _tokenSymbol
   * @returns {Bool} returns the paymetn update.
*/ const $0f9c8968340f6221$var$checkBlockConformationsNative = async (tx, _amount, _noOfBlockConformation, _tokenSymbol)=>{
    let provider = await (0, $f553423f3d0f773a$export$57632def5536cb24)();
    const confirmationsRequired = _noOfBlockConformation;
    const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
    if (receipt.status === 1) {
        let actualTokenTransfer = await $0f9c8968340f6221$var$checkTokenTransfersNative(tx); // It retunes the actual tokens received at the blockchain.
        if (actualTokenTransfer !== 0) {
            if (actualTokenTransfer >= _amount) {
                //   setPaymentStatus(true);
                //   setIsPaymentCompleted(true);
                (0, $erTRO$toast).success("Payment done successfully:)", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return true;
            } else {
                // alert("Something went wrong");
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
   * @param {String} tx
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */ const $0f9c8968340f6221$var$checkTokenTransfersNative = async (tx)=>{
    let provider = await (0, $f553423f3d0f773a$export$57632def5536cb24)();
    try {
        // Get the transaction details
        const transaction = await provider.getTransaction(tx);
        if (transaction && transaction.confirmations > 0) {
            let amountInWei = transaction.value;
            amountInWei = (0, $erTRO$bignumberjs)(amountInWei.toString());
            return amountInWei.toFixed();
        } else {
            // console.log("Transaction not found or not confirmed yet.");
            (0, $erTRO$toast).error("Transaction not found", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return "0";
        }
    } catch (error) {
        console.log("Err", error);
        (0, $erTRO$toast).error("Unable to get transaction details", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        return "0";
    }
};
/**
   * If user is selected with non-native token, function request the payment.
   * 
   */ const $0f9c8968340f6221$var$requestERC20Payment = async (_amount, _tokenAddress, _userAddress, _toAddress, _paymentConfirmations)=>{
    // setIsLoading(true);
    const signer = await (0, $f553423f3d0f773a$export$c128ec6fd8bee8d4)();
    try {
        /**
       * The ERC20 payment requires 2 transactions
       * 1. Approval of token
       * 2. Transafer of token
       */ const contractInstance = new (0, $erTRO$ethers).Contract(_tokenAddress, (0, $535c395a1d197c28$export$89843982d7e60b14), signer);
        let decimals = await contractInstance.decimals();
        decimals = decimals.toString();
        let amount = _amount;
        amount = (0, $erTRO$bignumberjs)(parseInt(amount * 10 ** decimals));
        amount = amount.toFixed();
        const getApprove = await contractInstance.approve(_userAddress, amount);
        await getApprove.wait();
        (0, $erTRO$toast).success("Token approved", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        let tx = await contractInstance.transferFrom(_userAddress, _toAddress, amount, {
            gasLimit: 100000
        });
        await tx.wait();
        let tx2 = await $0f9c8968340f6221$var$checkBlockConformations(tx.hash, amount, _paymentConfirmations, _tokenAddress);
        return tx2;
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
   * @param {INT} _amount
   * @param {INT} _noOfBlockConformation
   * @param {String} _tokenAddress
   * @returns {Bool} returns the paymetn update.
   */ const $0f9c8968340f6221$var$checkBlockConformations = async (tx, _amount, _noOfBlockConformation, _tokenAddress)=>{
    let provider = await (0, $f553423f3d0f773a$export$57632def5536cb24)();
    const confirmationsRequired = _noOfBlockConformation;
    const receipt = await provider.waitForTransaction(tx, confirmationsRequired);
    // Checks the status of the transaction
    if (receipt.status === 1) {
        let actualTokenTransfer = await $0f9c8968340f6221$var$checkTokenTransfers(tx, _tokenAddress);
        if (actualTokenTransfer !== "0") {
            if (_amount >= actualTokenTransfer) {
                //   setPaymentStatus(true);
                (0, $erTRO$toast).success("Payment done successfully.", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                //   console.log("Payment done successfully")
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
   * @param {String} _tokenAddress
   * @returns {String} String '0' or 'Amount_Of_Tokens'
   */ const $0f9c8968340f6221$var$checkTokenTransfers = async (transactionHash, _tokenAddress)=>{
    let provider = await (0, $f553423f3d0f773a$export$57632def5536cb24)();
    try {
        const transactionReceipt = await provider.getTransactionReceipt(transactionHash);
        if (transactionReceipt && transactionReceipt.status === 1) {
            const tokenContract = new (0, $erTRO$ethers).Contract(_tokenAddress, (0, $535c395a1d197c28$export$89843982d7e60b14), provider);
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



/*

    ✅ Connect Wallet
    ✅ Get Wallet address
    ✅ Token transfer
    ✅ Confirmation check
    ✅ Returns payment status.
    ✅ Testing ERC20 token
*/ // Unifarm: ArgentX wallet, It has stark token.
// BlockWhizz Bravoos Wallet



async function $3823cce36b9746c2$export$43158100a9ac6874() {
    try {
        let connectVar = await (0, $erTRO$connect)();
        return connectVar;
    } catch (error) {
        console.log(error);
        (0, $erTRO$toast).error("Unable to connect wallet.", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
    }
}








async function $8719e4e81b688ff3$export$ef880f08cac7f8c(Token, Address_, Amount, PaymentConfirmation = 2) {
    var _connectVar_account;
    let Address = Address_.STARKNET;
    if (Address.length === 66) {
        Address = Address.slice(3);
        Address = "0x" + Address;
    }
    let connectVar = await (0, $3823cce36b9746c2$export$43158100a9ac6874)();
    const walletId = connectVar === null || connectVar === void 0 ? void 0 : connectVar.id;
    const userAddress = connectVar === null || connectVar === void 0 ? void 0 : (_connectVar_account = connectVar.account) === null || _connectVar_account === void 0 ? void 0 : _connectVar_account.address;
    const provider = connectVar.provider;
    const signer = connectVar.account.signer;
    let tokenAddress = (0, $535c395a1d197c28$export$5c2c3f7af123bc40)["Starknet"][Token];
    let tokenDetails = (0, $535c395a1d197c28$export$8e1e81ac145e31be)[Token];
    if (tokenDetails.type === "unstable") {
        let liveTokenPrice = await (0, $34c3ac9406e6b976$export$6c774fdbdbcfd895)(tokenDetails.dname);
        let amount = Amount / liveTokenPrice;
        let tx = await $8719e4e81b688ff3$var$requestERC20Payment(amount, tokenAddress, Address, userAddress, provider, signer, PaymentConfirmation, connectVar);
        return tx;
    } else {
        let tx = await $8719e4e81b688ff3$var$requestERC20Payment(Amount, tokenAddress, Address, userAddress, provider, signer, PaymentConfirmation, connectVar);
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
 */ const $8719e4e81b688ff3$var$requestERC20Payment = async (_tokenAmount, _tokenAddress, _toAddress, _fromAddress, _provider, _signer, _blockConfirmations, _starknetObj)=>{
    let provider = _provider;
    const contractInstance = new (0, $erTRO$Contract)((0, $535c395a1d197c28$export$3765b2c107be43ec), _tokenAddress, provider);
    let decimal = await contractInstance.decimals();
    decimal = decimal.decimals.toString();
    let tokenAmount = (0, $erTRO$bignumberjs)(parseInt(_tokenAmount * 10 ** decimal));
    try {
        let transferToken = await _starknetObj.account.execute({
            contractAddress: _tokenAddress,
            entrypoint: "transfer",
            calldata: (0, $erTRO$CallData).compile({
                recipient: _toAddress,
                amount: (0, $erTRO$cairo).uint256(parseInt(tokenAmount))
            })
        });
        let status = await provider.waitForTransaction(transferToken.transaction_hash);
        let finalStatus = status.finality_status;
        if (finalStatus === "ACCEPTED_ON_L2") {
            let Receipt = await provider.getTransactionReceipt(transferToken.transaction_hash);
            let update = await $8719e4e81b688ff3$var$verifyTransaction(transferToken.transaction_hash, tokenAmount, provider, _toAddress, _fromAddress, _tokenAddress, decimal);
            if (update) {
                (0, $erTRO$toast).success("Token transferred successfully", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return true;
            } else {
                (0, $erTRO$toast).error("Unable to make payment! \n No payment found on L2", {
                    position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                    theme: "dark"
                });
                return false;
            }
        } else {
            (0, $erTRO$toast).error("Unable to make payment! \n Error while accepting transfer at L2", {
                position: (0, $erTRO$toast).POSITION.TOP_CENTER,
                theme: "dark"
            });
            return false;
        }
    } catch (error) {
        console.log("error: " + error);
        (0, $erTRO$toast).error("Unable to make payment!", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        return false;
    }
};
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
 */ const $8719e4e81b688ff3$var$verifyTransaction = async (_txHash, _latestAmount, _provider, _toAddress, _fromAddress, _tokenAddress, _decimal)=>{
    let verificationStatue = false;
    const provider = _provider;
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
    tokenTransferedAmount = tokenTransferedAmount * _decimal;
    let _amount = parseInt(_latestAmount.toString());
    if (tokenTransferedAmount >= _amount && tokenTransferedToAddress.toLowerCase() === _toAddress.toLowerCase() && tokenTransferedFromAddress.toLowerCase() === _fromAddress.toLowerCase() && tokenAddressOfTransferToken.toLowerCase() === _tokenAddress.toLowerCase()) verificationStatue = true;
    return verificationStatue;
};





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
 */ function $6b5a659072b0dc13$var$CryptoPayment({ Address: Address, Tokens: Tokens, Chains: Chains, Amount: Amount, noOfBlockConformation: noOfBlockConformation, setPaymentStatus: setPaymentStatus, Style: Style = {
    displayName: "Make Payment",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer"
} }) {
    const [isPopUpOpen, setIsPopUpOpen] = (0, $erTRO$useState)(false);
    const [selectedBlockchain, setSelectedBlockchain] = (0, $erTRO$useState)("");
    const [selectedToken, setSelectedToken] = (0, $erTRO$useState)("");
    const [btnName, setBtnName] = (0, $erTRO$useState)("Make Payment");
    const [isLoading, setIsLoading] = (0, $erTRO$useState)(false);
    const [isAllSelected, setIsAllSelected] = (0, $erTRO$useState)(false); // If Bockchain and Token are selected & Clicked on make payment, The Dropdown will be disabled.
    const [currentTokenPrice, setCurrentTokenPrice] = (0, $erTRO$useState)(""); // To display the conversion rate for token.
    /**
     * Navigates the selections to selected blockchain.
     */ const makePayment = async ()=>{
        if (selectedBlockchain === "" || selectedToken === "") (0, $erTRO$toast).warning("Please select payment method", {
            position: (0, $erTRO$toast).POSITION.TOP_CENTER,
            theme: "dark"
        });
        else switch(selectedBlockchain){
            case "Starknet":
                console.log("Redirect to Starknet");
                setIsLoading(true);
                let makePaymentStarknet = await (0, $8719e4e81b688ff3$export$ef880f08cac7f8c)(selectedToken, Address, Amount, noOfBlockConformation);
                setPaymentStatus(makePaymentStarknet);
                if (makePaymentStarknet) setIsPopUpOpen(false);
                setIsLoading(false);
                break;
            default:
                setIsLoading(true);
                let makePaymentEVM = await (0, $0f9c8968340f6221$export$1213dd6fecdd48f0)(selectedBlockchain, selectedToken, Address, Amount, noOfBlockConformation);
                setPaymentStatus(makePaymentEVM);
                if (makePaymentEVM) setIsPopUpOpen(false);
                setIsLoading(false);
                break;
        }
    };
    return /*#__PURE__*/ (0, $erTRO$jsxs)((0, $erTRO$Fragment), {
        children: [
            /*#__PURE__*/ (0, $erTRO$jsx)("button", {
                style: Style,
                onClick: ()=>setIsPopUpOpen(true),
                children: Style === null || Style === void 0 ? void 0 : Style.displayName
            }),
            isPopUpOpen && /*#__PURE__*/ (0, $erTRO$jsx)("div", {
                className: "popup-container",
                children: /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                    className: "popup-content",
                    children: [
                        /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                            className: "resmic-logo",
                            children: [
                                /*#__PURE__*/ (0, $erTRO$jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($ec82249468484c78$exports))),
                                    alt: "resmic image"
                                }),
                                /*#__PURE__*/ (0, $erTRO$jsx)("span", {
                                    className: "close",
                                    onClick: ()=>setIsPopUpOpen(false),
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
                                            /*#__PURE__*/ (0, $erTRO$jsx)("label", {
                                                className: "inputHeading",
                                                children: "Blockchain"
                                            }),
                                            /*#__PURE__*/ (0, $erTRO$jsxs)("select", {
                                                onChange: (e)=>setSelectedBlockchain(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, $erTRO$jsx)("option", {
                                                        children: "Select Blockchain"
                                                    }),
                                                    Object.keys(Chains).map((chain)=>/*#__PURE__*/ (0, $erTRO$jsx)("option", {
                                                            value: Chains[chain].name,
                                                            children: Chains[chain].name
                                                        }, Chains[chain].name))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $erTRO$jsxs)("div", {
                                        className: "inputGroup",
                                        children: [
                                            /*#__PURE__*/ (0, $erTRO$jsx)("label", {
                                                className: "inputHeading",
                                                children: "Token"
                                            }),
                                            /*#__PURE__*/ (0, $erTRO$jsxs)("select", {
                                                id: "",
                                                onChange: (e)=>setSelectedToken(e.target.value),
                                                disabled: isAllSelected,
                                                children: [
                                                    /*#__PURE__*/ (0, $erTRO$jsx)("option", {
                                                        children: "Select Token"
                                                    }),
                                                    Tokens.filter((obj)=>(0, $535c395a1d197c28$export$c12d5eb7df2a872c)[selectedBlockchain].includes(obj.name)).map((obj)=>/*#__PURE__*/ (0, $erTRO$jsx)("option", {
                                                            value: obj.name,
                                                            children: obj.name
                                                        }, obj.name))
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
            }),
            /*#__PURE__*/ (0, $erTRO$jsx)((0, $erTRO$ToastContainer), {})
        ]
    });
}
var $6b5a659072b0dc13$export$2e2bcd8739ae039 = $6b5a659072b0dc13$var$CryptoPayment;





export {$6b5a659072b0dc13$export$2e2bcd8739ae039 as CryptoPayment, $535c395a1d197c28$export$c3f32f9b7c2f46bb as Chains, $535c395a1d197c28$export$8e1e81ac145e31be as Tokens};
//# sourceMappingURL=module.js.map
