import axios from 'axios'
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/**
* Reterivies the current price in USD from Coingecko
* @param {String} // string e.g. "Ethereum"
* @return {Number} value in USD
*/
export const getCurrentTokenPrice = async (_token) => {
    let token = _token.toLowerCase();
    try {
        let url = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`;
        let fetchUrl = await axios.get(url);
        let currentUsdPrice = fetchUrl.data[token]['usd'];
        return currentUsdPrice;
        
    } catch (error) {
        toast.error('Unable to fetch live price!', { position: toast.POSITION.TOP_CENTER,theme: "dark"});
        console.log(error.message);
    }
}
