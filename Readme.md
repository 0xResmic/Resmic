
# Resmic
</br>

## Decentralised |  Non-Custodial | P2P Payment Infr

Welcome to Resmic, your go-to solution for accepting a variety of crypto payments in a 100% decentralised & non-custodial manner. Resmic is an NPM package that empowers individuals and businesses to seamlessly integrate cryptocurrency payments into their applications and websites. 

With Resmic, you can easily accept payments in Bitcoin, Ethereum, and many other cryptocurrencies, giving your customers more flexibility and convenience.

</br>

## Demo

<!-- https://github.com/0xResmic/componentcreation/assets/90379168/640b10f1-cce4-4be7-b28d-609f354b7506 -->
<!-- https://youtu.be/MVKHNkfOqXA -->
![Resmic Demo](src/assets/resmic_demo.gif "Resmic Demo")

</br>
</br>

## Features
Resmic comes with a range of features designed to make crypto payments accessible and secure:

- **Multi-Currency Support:** Accept payments in a wide variety of cryptocurrencies, including Bitcoin, Ethereum, USDT, and more.

- **Decentralised and Non-Custodial:** Resmic operates on a decentralised infrastructure, ensuring that you have full control over your funds without relying on a third party.

- **Customizable Payment Flow:** Tailor the payment flow to match your branding and user experience.

- **0 DownTime:** Operates without any reliance on traditional server infrastructure.

- **0 Fees:**  No expenses or charges associated with the service.

- **Security:** Security is a paramount concern in the world of cryptocurrency payments, and Resmic takes it seriously with our most secure infrastructure.


 </br>
 
## Installation

Install Resmic components with [npm](https://www.npmjs.com/package/resmic)
</br>
```bash
  npm install resmic

```
</br>
    
## Usage
Here's a simple example of how you can use Resmic to accept a crypto payment:

</br>

### For EVM Blockchains
</br>

```javascript
import { useState } from 'react';
import {EVMConnect, Tokens, Chains} from 'resmic'

function App() {

	const [paymentStatus, setPaymentStatus] = useState() // Returns bool after the payment
	
	// Your code...

  return (
	<div>
	    <EVMConnect  Address={"YOUR_WALLET_ADDRESS"} //Wallet address to receive funds
	        Chains={[ Chains.Ethereum, Chains.Polygon, Chains.Binance, Chains.Goerli]} //Choose the blockchains to allow payments from
        	Tokens ={[Tokens.USDC,Tokens.USDT, Tokens.DAI, Tokens.BUSD, Tokens.MATIC, Tokens.ETH , Tokens.GETH, Tokens.Bitcoin]} //Choose the Tokens to accept payments from
                Amount={100} //Amount you want to receive in USD($)
                setPaymentStatus = {setPaymentStatus}
                noOfBlockConformation={2} //No. of blocks to wait for the payment conformation (Optional)
                Style = {{displayName: "Make Payment", 
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontSize: "18px"}}
	    />
	</div>
  )
}
```
</br>

### For Starknet Blockchain
</br>

```javascript
import { useState } from 'react';
import {StarkNetConnect, StarkTokens} from 'resmic'

function App() {

	const [paymentStatus, setPaymentStatus] = useState() // Returns bool after the payment
	
	// Your code...

  return (
	<div>
	    <StarkNetConnect Address={"YOUR_WALLET_ADDRESS"} //Wallet address to receive funds
	        Tokens = {[StarkTokens.USDT, StarkTokens.USDC, StarkTokens.ETH, StarkTokens.Bitcoin]} //Choose the Tokens to accept payments from
	        Amount={100} //Amount you want to receive in USD($)
	        setPaymentStatus = {setPaymentStatus} 
	        Style = {{displayName: "Make Payment", 
	            backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontSize: "18px"}}
	    />
	</div>
  )
}
```


For more detailed information on how to use Resmic, please refer to our [documentation](https://www.docs.resmic.com)

</br>
</br>

## Support

If you encounter any issues, have questions, or want to provide feedback, please feel free to reach out to our support team at support@resmic.com. We value your input and are committed to helping you make the most of Resmic.

</br>
</br>

## Documentation

Ready to get started? 
</br>
[Read installation instructions.](https://www.docs.resmic.com)

</br>
</br>

## 🏅 Backers

<img width="80" height="80" alt="Starknet Blockchain" src="src/assets/starknet.png">


</br>
</br>

## Like This Project?
**Support us:**
</br>
	Wallet address: 0x056397760b973BfB921Bc10Be9DA5034B1e921d7
 </br>
 or
 </br>
 	[Buy us a coffee](https://www.buymeacoffee.com/resmic)

</br>
</br>

## License

[MIT](https://choosealicense.com/licenses/mit/)


