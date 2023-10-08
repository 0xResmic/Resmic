
# Resmic

## Decentralised |  Non-Custodial | P2P Payment Infr

Welcome to Resmic, your go-to solution for accepting a variety of crypto payments in a 100% decentralised & non-custodial manner. Resmic is an NPM package that empowers individuals and businesses to seamlessly integrate cryptocurrency payments into their applications and websites. 

With Resmic, you can easily accept payments in Bitcoin, Ethereum, and many other cryptocurrencies, giving your customers more flexibility and convenience.

## Demo

Insert gif or link to demo


## Features
Resmic comes with a range of features designed to make crypto payments accessible and secure:

- **Multi-Currency Support:** Accept payments in a wide variety of cryptocurrencies, including Bitcoin, Ethereum, USDT, and more.

- **Decentralised and Non-Custodial:** Resmic operates on a decentralised infrastructure, ensuring that you have full control over your funds without relying on a third party.

- **Customizable Payment Flow:** Tailor the payment flow to match your branding and user experience.

- **0 DownTime:** ##Add description here

- **0 Fees:** ##Add description here

- **Security:** ##Add description here


 
## Installation

Install Resmic components with npm

```bash
  npm install resmic

```
    
## Usage
Here's a simple example of how you can use Resmic to accept a crypto payment:

### For EVM Blockchains
<!-- Add line break here -->

```javascript
import { useState } from 'react';
import {EVMConnect, Tokens, Chains} from 'resmic'

function App() {

	const [paymentStatus, setPaymentStatus] = useState() // Returns bool after the payment
	
	// Your code...

  return (
	  <div>

		<EVMConnect  Address={"0x056397760b973BfB921Bc10Be9DA5034B1e921d7"} //Wallet address where will get received
        	Chains={[ Chains.Ethereum, Chains.Polygon, Chains.Binance, Chains.Goerli]} //Blockchians
        	Tokens ={[Tokens.USDC,Tokens.USDT, Tokens.DAI, Tokens.BUSD, Tokens.MATIC, Tokens.ETH , Tokens.GETH, Tokens.Bitcoin]} //Tokens
            Amount={100} //Amount in USD
            setPaymentStatus = {setPaymentStatus}
            noOfBlockConformation={2}
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

### For Starknet Blockchain
<!-- Add line break here -->

```javascript
import { useState } from 'react';
import {StarkNetConnect, StarkTokens} from 'resmic'

function App() {

	const [paymentStatus, setPaymentStatus] = useState() // Returns bool after the payment
	
	// Your code...


  return (
	  <div>

		<StarkNetConnect Address={"0x54c3d39e809b890f22fbc608275861cf3db0582c8b433cf4c8b5702a46ec8a7"}// Wallet address where will get received
        	Tokens ={[StarkTokens.USDT, StarkTokens.USDC, StarkTokens.ETH, StarkTokens.Bitcoin]} //Tokens want to accept
            Amount={100} //Amount in USD
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


For more detailed information on how to use Resmic, please refer to our documentation[link].
## Support

If you encounter any issues, have questions, or want to provide feedback, please feel free to reach out to our support team at support@resmic.com. We value your input and are committed to helping you make the most of Resmic.

## Documentation

Ready to get started? [Read installation instructions.](docs.resmic.com)


## 🏅 Backers

<!-- Imgs of starknet and upcomming -->
## Like This Project?

wallet address/ Buy me a coffee url
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Keywords

