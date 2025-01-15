import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * Function to connect extension wallet ArgentX OR Braavos
 * @returns {Object} // Wallet object.
*/
const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  return null;
};

export async function  connectWallet  () {
  const provider = getProvider();
  if (provider) {
    try {
      const response = await provider.connect();
      console.log("Res", response)
      let walletAddress =  response.publicKey.toString()
      return { provider, walletAddress};
    } catch (err) {
      console.error("Error connecting to wallet:", err);
      toast.error('Unable to connect wallet.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
    }
  } else {
    toast.error('Phantom wallet is not installed!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
  }
};