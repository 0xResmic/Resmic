export const SupportedBlockchains = [
    "Ethereum",'Polygon',"Starknet", "Binance", "Optimism", "Sepolia", "Nibiru", "XDC-Network",
];
export const SupportedTokens = {
    // EVM Blockchains. 
    "Ethereum":["ETH", "USDT", "USDC", "MATIC","DOGE", "WBTC", ],
    "Polygon":[ "MATIC","USDT", "USDC", "ETH","DOGE", "WBTC", ],
    "BNB-Chain":["BNB","BUSD", "USDC", "ETH", "DOGE", ],
    "Binance-TestNet":["BNB","BUSD", "USDC", "ETH", "DOGE", ],
    "Optimism":["OP","USDT", "USDC", "ETH", "MATIC","DOGE", "WBTC", ],
    "Sepolia":["SETH","USDT", 'BNB', 'DAI'],
    
    "XDC-Network":["XDC", "USDT" ],

    // Non-EVM Blockchains.
    "Starknet":["STARK","USDT", "USDC", "ETH", "GETH", "WBTC" ],
    // "Nibiru":["NIBI","BTC", "ETH"],
    "Solana":["SOL", "WETH", "USDT", "USDC",],
    
    "":[""], //@note Do not remove this line.
};

export const Chains = {
    "Ethereum" : {"name": "Ethereum", "description": "", "id": "0x1", "img":""},
    "Polygon" : {"name": "Polygon", "description": "", "id": "0x89", "img":""},
    "BNB-Chain" : {"name": "BNB-Chain", "description": "", "id": "0x38", "img":""},
    "Binance-TestNet" : {"name": "Binance", "description": "", "id": "0x61", "img":""},
    "Optimism" : {"name": "Optimism", "description": "", "id": "0xa", "img":""},
    "Sepolia" : {"name": "Sepolia", "description": "", "id": "0xaa36a7", "img":""},
    
    "XDC-Network" : {"name": "XDC-Network", "description": "", "id": "0x32", "img":""},
    
    "Starknet" : {"name": "Starknet", "description": "", "id": "", "img":""},
    "Nibiru" : {"name": "Nibiru", "description": "", "id": "", "img":""},
    "Solana" : {"name": "Solana", "description": "", "id": "solana", "img":""},

};
export const Tokens = {
    // If Tokens is stable conin, id == chainId to identify is it native token. else -1
    USDT: {"name": "USDT", "dname":"USDT", "type": "stable", "id": "-1", "description": ""},
    BUSD: {"name": "BUSD", "dname":"BUSDT", "type": "stable", "id": "-1"},
    USDC: {"name": "USDC", "dname":"USDC", "type": "stable", "id": "-1"},
    PUSH: {"name": "PUSH", "dname":"push", "type": "unstable", "id": ""},
    MATIC: {"name": "MATIC", "dname":"matic-network", "type": "unstable", "id": "0x89"},
    ETH: {"name": "ETH", "dname":"ethereum", "type": "unstable", "id": "0x1"},
    SETH: {"name": "SETH", "dname":"ethereum", "type": "unstable", "id": "0xaa36a7"}, // Sepolia ETH
    NIBI: {"name": "NIBI", "dname":"nibiru", "type": "unstable", "id": ""},
    DOGE: {"name": "DOGE", "dname":"doge", "type": "unstable", "id": ""},
    STARK: {"name": "STARK", "dname":"starknet", "type": "unstable", "id": ""},
    BNB: {"name": "BNB", "dname":"binancecoin", "type": "unstable", "id": "0x38"},
    TBNB: {"name": "TBNB", "dname":"binancecoin", "type": "unstable", "id": "0x61"},
    BTC: {"name": "BTC", "dname":"Bitcoin", "type": "unstable", "id": ""},
    DAI: {"name": "DAI", "dname":"DAI", "type": "stable", "id": "-1"},
    
    XDC: {"name": "XDC", "dname":"xdce-crowd-sale", "type": "unstable", "id": "0x32"},
    SOL: {"name": "SOL", "dname":"solana", "type": "unstable", "id": "solana"},
    
    WBTC: {"name": "WBTC", "dname":"Bitcoin", "type": "unstable", "id": ""},
    WETH: {"name": "WETH", "dname":"ethereum", "type": "unstable", "id": ""},
};
/**
 * Supported {Verified } ERC 20 token address
 */
export const TokenAddress = {
    
    "Ethereum":{
        "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "DAI": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        "WBTC": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "MATIC": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    },
  
    "Polygon":{
        "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        "USDC": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "DAI": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        "BUSD": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
        "WBTC": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        "BNB": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
        "ETH": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      },
      
    "BNB-Chain":{
        "BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "DAI": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        // "BSC-USD": "0x55d398326f99059fF775485246999027B3197955",
        "USDT": "0x55d398326f99059fF775485246999027B3197955",// BSC-USD
        "USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "DOGE": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", // dogecoin 
        "MATIC": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        "ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        // "WBTC": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    },
  
    "Optimism":{
        "USDT": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        "USDC": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        "WBTC": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
        "DAI": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        "Optimism": "0x4200000000000000000000000000000000000042",
  
    },
  
    "Goerli":{
        "USDC":"0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "DAI":"0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33",        
    },

    "Sepolia":{
        "USDC":"0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "USDT":"0x65aFADD39029741B3b8f0756952C74678c9cEC93",
        "DAI":"0x36e08F3A09fEf0e48261226dcA3084A1FBE20aFe",        
        "BNB":"0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33",        
    },

    "Starknet":{
        "STARK": "0x4718f5a0Fc34cC1AF16A1cdee98fFB20C31f5cD61D6Ab07201858f4287c938D",
        "ETH": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7" , 
        "DAI"  : "0x0dA114221cb83fa859DBdb4C44bEeaa0BB37C7537ad5ae66Fe5e0efD20E6eB3", 
        "USDC" : "0x053C91253BC9682c04929cA02ED00b3E423f6710D2ee7e0D5EBB06F3eCF368A8", 
        "USDT" : "0x68F5c6a61780768455de69077E07e89787839bf8166dEcfBf92B645209c0fB8", 
        "WBTC" : "0x3Fe2b97C1Fd336E750087D68B9b867997Fd64a2661fF3ca5A7C771641e8e7AC",
    },

    "Solana":{
        "USDC": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", 
        // "USDC": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr", // Test USDC on devnet
        "USDT": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "WETH": "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
    },
    "XDC-Network":{
        // "WXDC": "0x951857744785e80e2de051c32ee7b25f9c458c42",
        "USDT": "0xd4b5f10d61916bd6e0860144a91ac658de8a1437",
    },
}

/**
* ERC20 Smart Contract ABI for EVM blockchains.
*/
export const ERC20_ABI  = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "", type: "address" },
        { name: "", type: "address" },
      ],
      name: "allowed",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    { anonymous: false, inputs: [], name: "Pause", type: "event" },
    { anonymous: false, inputs: [], name: "Unpause", type: "event" },
];
/**
* ERC20 Smart Contract ABI for Starknet Blockchain.
*/
export const STARKNET_ERC20_ABI = [
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
]
  