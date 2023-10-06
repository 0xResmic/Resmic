
export async function connectWallet () {

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

export async function switchNetwork(networkId) {

    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkId }],
      });
      
    // try {
    //     await window.ethereum.request({
    //       method: 'wallet_switchEthereumChain',
    //       params: [{ chainId: networkId }],
    //     });
    //   } 
    //   catch (switchError) {
    //     alert("Unable to switch network!")
    //     if (switchError.code === 4902) {
    //     }
    // }

}

    
  
