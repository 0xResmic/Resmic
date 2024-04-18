import { connect, disconnect } from "get-starknet"
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Function to connect extension wallet ArgentX OR Braavos
 * @returns {Object} // Wallet object.
 */
export async function connectWallet() {
    try {
        let connectVar = await connect();
        return connectVar;
    } catch (error) {
        console.log(error)
        toast.error('Unable to connect wallet.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});   
    }
}