import { connect } from "@argent/get-starknet"

export async function connectWallet() {

    try {
        const starknet = await connect();
        await starknet?.enable({ starknetVersion: "v4" })
        let m = await starknet.account
        return starknet 
        
    } catch (error) {
        console.log(error);
        alert("Unable to connect wallet :(")
    }

}