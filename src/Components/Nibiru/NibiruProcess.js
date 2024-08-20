// rpc: https://nibiru.rpc.kjnodes.com

export async function makeNibiruPayment(Token, Address, Amount, PaymentConfirmation=2) {

    console.log("Here we are")
    let account;
    let currentChainId;

    if(!window.leap){
        alert("Please install Leap wallet!")
    }
    // const con = await window.getKey('cataclysm-1')
    const con = await window.leap.getKey('cataclysm-1')
    // const con = await window.leap.getKey('nibiru-testnet-1')
    console.log("con", con);
    
    console.log("window", window.leap);
    
}