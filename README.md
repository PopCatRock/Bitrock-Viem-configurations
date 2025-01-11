# **Bitrock Chain Configuration**

This repository provides a simple configuration file for integrating with the **Bitrock** blockchain using the `viem` library. The configuration defines key properties of the Bitrock network, including its chain ID, native currency, RPC endpoints, and block explorer URL.

---

## **Features**

1. **Custom Chain Integration**
Connect your decentralized application (dApp) to the **Bitrock** blockchain using the provided chain definition.

3. **Native Currency Support**  
The Bitrock network uses **"Bitrock" (BROCK)** as its native currency, with 18 decimal places. This currency is used for transactions and smart contract interactions.

4. **Multiple RPC Endpoints**  
The configuration supports both HTTP and WebSocket connections, enabling standard requests as well as real-time blockchain event updates.

5. **Block Explorer Support**  
The provided block explorer URL allows users to view transaction details, block information, and smart contract data directly from your dApp.

6. **Possible use: Smart Contract Watcher**  
This configuration can be used to set up a **Smart Contract Watcher** that listens for specific events from Bitrock-based smart contracts in real-time using WebSocket connections.

---

## **How to Use**

### **1. Defining the Chain in Your Project**

You can define the Bitrock chain using the `viem` library as shown below:

```
import { defineChain } from 'viem';

// Define the Bitrock chain configuration
export const ChainId = defineChain({
    name: "Bitrock",
    id: 7171,
    nativeCurrency: {
        name: "Bitrock",
        symbol: "BROCK",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ["https://connect.bit-rock.io"],
            webSocket: ["wss://connect.bit-rock.io/ws/"]
        }
    },
    blockExplorers: {
        default: {
            name: "Bitrock Blockchain Explorer",
            url: "https://explorer.bit-rock.io"
        }
    }
});
```
2. **Connecting to the Bitrock Blockchain**

You can use the viem or ethers.js libraries to connect to the Bitrock network and interact with it.

## **Using viem**
```
import { createPublicClient, http } from 'viem';
import { ChainId } from './chains';

// Create a public client for interacting with the Bitrock blockchain
const client = createPublicClient({
    chain: ChainId,
    transport: http()
});

// Example: Fetch the latest block number
async function getBlockNumber() {
    const blockNumber = await client.getBlockNumber();
    console.log("Current Block Number on Bitrock:", blockNumber);
}

getBlockNumber();
```

## **Using ethers.js**
```
import { ethers } from 'ethers';

// Connect to the Bitrock network using the RPC URL
const provider = new ethers.JsonRpcProvider("https://connect.bit-rock.io");

// Example: Fetch the latest block number
async function getBlockNumber() {
    const blockNumber = await provider.getBlockNumber();
    console.log("Current Block Number on Bitrock:", blockNumber);
}

getBlockNumber();
```

3. **Possible usecase: Smart Contract Watcher**

You can use WebSocket connections to set up a Smart Contract Watcher that listens for specific events emitted by smart contracts in real-time.

**Example: Listening for Token Transfers**
```
import { createPublicClient, webSocket } from 'viem';
import { ChainId } from './chains';

// Create a WebSocket client for real-time updates
const client = createPublicClient({
    chain: ChainId,
    transport: webSocket()
});

// Example: Listen for new block headers
client.subscribe('newBlockHeaders', {}, (header) => {
    console.log("New Block on Bitrock:", header.number);
});

// Example: Subscribe to token transfer events (ERC-20 example)
const contractAddress = "0xYourTokenContractAddress";
const transferEventSignature = "0xddf252ad..."; // Keccak256 hash of Transfer(address,address,uint256)

client.subscribeLogs({
    address: contractAddress,
    topics: [transferEventSignature]
}, (log) => {
    console.log("Token Transfer Event:", log);
});
```

## **Native Currency Details**

	•	Name: **Bitrock**
	•	Symbol: **BROCK**
	•	Decimals: **18**

Use **BROCK** for all transactions on the Bitrock blockchain, including paying for gas fees when deploying or interacting with smart contracts.

## **Block Explorer**

Users can view transactions, blocks, and smart contracts on the Bitrock blockchain using the official block explorer:
Bitrock Blockchain Explorer

## **Contributing**

If you’d like to contribute to this project, please feel free to fork the repository, make your changes, and submit a pull request. We welcome all contributions!

License

This project is licensed under the MIT License.

## Support us
**EVM:** 0xd3f4A57d684f50f8032EF9d419d702f384240EEd
