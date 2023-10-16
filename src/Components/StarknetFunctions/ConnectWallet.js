import { connect, disconnect } from "get-starknet"
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function connectWallet() {

    try {
        let con = await connect();
        return con;

    } catch (error) {
        console.log(error)
        toast.error('Unable to connect wallet.', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        
    }

}