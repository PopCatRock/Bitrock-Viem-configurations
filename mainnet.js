import {defineChain} from 'viem';

export const ChainId = defineChain({
    "name": "Bitrock",
    "id": 7171,
    "nativeCurrency": {
        "name": "Bitrock",
        "symbol": "BROCK",
        "decimals": 18
    },
    "rpcUrls": {
        "default": {
            "http": [
                "https://connect.bit-rock.io/" // or you can use https://brockrpc.io/
            ],
            "webSocket": [
                "wss://connect.bit-rock.io/ws/" // or wss://brockrpc.io/ws/
            ]
        }
    },
    "blockExplorers": {
        "default": {
            "name": "Bitrock Blockchain Explorer",
            "url": "https://explorer.bit-rock.io/"
        }
    }
});
