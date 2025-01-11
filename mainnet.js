// You can remove all the comments if using this code, as they are provided only to help us understand the purpose of the code better :)
// import the `defineChain` function from the 'viem' library.
// we use this function to define the configuration for a blockchain network.
import { defineChain } from 'viem';

// Exporting a constant called `ChainId`, which is created using the `defineChain` function.
// in this case we are using this to define the configuration for the "Bitrock" network.
export const ChainId = defineChain({
    // The name of the blockchain network.
    "name": "Bitrock",
    
    // unique numeric identifier (chain ID) for the blockchain network.
    // the chain ID is used to differentiate one network from others in the Ethereum ecosystem.
    "id": 7171,
    
    // Details of the native currency used on the blockchain in this case $BROCK.
    "nativeCurrency": {
        "name": "Bitrock", // The name of the native currency (e.g., Ether for Ethereum).
        "symbol": "BROCK", // The symbol for the currency (e.g., ETH for Ether).
        "decimals": 18 // The number of decimal places the currency can be divided into.
        // ^(e.g., 1 ETH would be 1 followed by 18 decimals in this case 18 zeros)
    },
    
    // config for the RPC (Remote Procedure Call) endpoints.
    // These are the URLs used by clients to connect to the blockchain network.
    "rpcUrls": {
        "default": { // Default RPC endpoints for interacting with the network.
            "http": [
                "https://connect.bit-rock.io/" // The HTTP RPC URL for accessing the Bitrock network.
                // you can also use the HTTP URL: https://brockrpc.io/
            ],
            "webSocket": [
                "wss://connect.bit-rock.io/ws/" // The WebSocket RPC URL for real-time interaction.
                // you can also use the WebSocket URL: wss://brockrpc.io/ws/
            ]
        }
    },
    
    // Configuration for the blockchain explorer.
    "blockExplorers": {
        "default": { // Default block explorer for this network.
            "name": "Bitrock Blockchain Explorer", // Name of the blockchain explorer.
            "url": "https://explorer.bit-rock.io/" // the URL for the blockchain explorer.
        }
    }
});
