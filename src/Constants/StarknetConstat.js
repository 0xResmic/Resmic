
export const StarknetTokenAddress = {
    "Ethereum": "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7" , 
    "DAI"  : "0x00dA114221cb83fa859DBdb4C44bEeaa0BB37C7537ad5ae66Fe5e0efD20E6eB3", 
    // "USDC" : "0x053C91253BC9682c04929cA02ED00b3E423f6710D2ee7e0D5EBB06F3eCF368A8", 
    "USDC" : "0x49D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7", 
    "USDT" : "0x068F5c6a61780768455de69077E07e89787839bf8166dEcfBf92B645209c0fB8", 
    "WBTC" : "0x03Fe2b97C1Fd336E750087D68B9b867997Fd64a2661fF3ca5A7C771641e8e7AC",
    "GETH" : "0x49D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",
}


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