
import { connect, disconnect } from "get-starknet"
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Function to connect extension wallet ArgentX OR Braavos
 * @returns {Object} // Wallet object.
 */
export async function connectWallet() {

    const getProvider = () => {
        if ('phantom' in window) {
          const provider = window.phantom?.solana;
      
          if (provider?.isPhantom) {
            return provider;
          }
        }
      
        toast.error('Phantom wallet not detected .', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      };

      const provider = getProvider(); // see "Detecting the Provider"
      try {
          const resp = await provider.connect();
          console.log(resp.publicKey.toString());
      } catch (err) {
        
        toast.error('Unable to connect wallet.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
      }
}