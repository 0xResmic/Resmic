/**
 * Supported {Verified } ERC 20 token address
 */
export const TokenAddress = {
    
  "Ethereum":{
      "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "DAI": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
      "Bitcoin": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "Matic": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  },

  "Polygon":{
      "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      "USDC": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      "DAI": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      "BUSD": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
      "Bitcoin": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      "BNB": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
      "Ethereum": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    },
    
  "Binance":{
      "BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      "DAI": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
      // "BSC-USD": "0x55d398326f99059fF775485246999027B3197955",
      "USDT": "0x55d398326f99059fF775485246999027B3197955",// BSC-USD
      "USDC": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      "DOGE": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", // dogecoin 
      "Matic": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
      "Ethereum": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      "Bitcoin": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  },

  "Optimism":{
      "USDT": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      "USDC": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      "Bitcoin": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      "DAI": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      "Optimism": "0x4200000000000000000000000000000000000042",

  },

  "Goerli":{
      "USDC":"0x65aFADD39029741B3b8f0756952C74678c9cEC93",
      "DAI":"0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33",        
  }
}
/**
* Newly supported blockchains will be added here.
*/
export const Chains = {
Ethereum: {"name":'Ethereum','id':'0x1'},
Polygon: {"name":'Polygon','id':'0x89', "img": "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"},
Binance: {"name":'Binance','id':'0x38'},
Optimism: {"name":'Optimism','id':'0xa'},
Goerli: {"name":'Goerli','id':'0x5'},
}

/**
* Newly supported tokens will be added here.
*/
export const Tokens ={
  USDT:{"dname":"USDT","name":'USDT','type':'stable', 'id':'-1',"img":"url"},
  USDC:{"dname":"USDC","name":'USDC','type':'stable', 'id':'-1'},
  DAI:{"dname":"DAI","name":'DAI','type':'stable', 'id':'-1'},
  BUSD:{"dname":"BUSD","name":'BUSD','type':'stable', 'id':'-1'},
  ETH:{"dname":"Ethereum","name":'Ethereum','type':'unstable', 'id':'0x1'}, // ID is important for identify is the token is native or not & for switching chain.
  MATIC:{"dname":"MATIC", "name":"matic-network",'type':'unstable', 'id':'0x89', "img": "https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"},
  // BNB:{"dname":"BNB","name":'BNB','type':'unstable', 'id':'0x38'},
  BNB:{"dname":"BNB","name":'binancecoin','type':'unstable', 'id':'0x38'},
  Bitcoin:{"dname":"Bitcoin","name":'Bitcoin','type':'unstable', 'id':'-1', "img":"https://bitcoin.org/img/icons/logotop.svg?1693519667" },
  DOGE:{"dname":"Dogecoin","name":'dogecoin','type':'unstable', 'id':'-1'},
  OPTIMISM:{"dname":"Optimism","name":'Optimism','type':'unstable', 'id':'-1'},
  BSCUSD:{"dname":"BSCUSD","name":'BSCUSD','type':'stable', 'id':'-1'}, // Binance-USDC
  GETH:{"dname":"Ethereum","name":'Ethereum','type':'unstable', 'id':'0x5'},
}

/**
* ERC20 Smart Contract ABI
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

