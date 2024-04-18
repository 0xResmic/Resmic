import { ethers } from "ethers";

/**
 * Connects dApp to Metamask wallet.
 * @returns {{String, String}} // Connected wallet address and ChainId
 */
export async function connectWalletFn () {

    let account;
    let currentChainId;
    if(!window.ethereum){
        alert("Please install MetaMask!")
    }
    await window.ethereum.request({ method:"eth_requestAccounts"})
        .then( (accounts) => {
        account = (accounts[0]);
    }).catch( (e) => {
        alert(e)
    })
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return {account, chainId}
}

/**
 * Function to switch the metamask network to desired network
 * @param {String} networkId // Hex string  
 */
export async function switchNetwork(networkId) {

    try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: networkId }],
        });
      } 
      catch (switchError) {
        alert("Unable to switch network!")
        if (switchError.code === 4902) {
        }
    }
}

/**
 * Returns the provider from metamask.
 * @returns promise provider
 */
export async function getProvider(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider;
}
/**
 * Returns the signer from metamask to sign the transaction.
 * @returns {Object} promise signer
 */
export async function getSigner(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    return signer;

}
    
  
