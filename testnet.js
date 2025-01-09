import {defineChain} from 'viem';

export const ChainId = defineChain({
    "name": "Bitrock",
    "id": 7771,
    "nativeCurrency": {
        "name": "Bitrock",
        "symbol": "BROCK",
        "decimals": 18
    },
    "rpcUrls": {
        "default": {
            "http": [
                "https://testnet.bit-rock.io/"
            ],
            "webSocket": [
                "wss://testnet.bit-rock.io/ws/"
            ]
        }
    },
    "blockExplorers": {
        "default": {
            "name": "Bitrock Blockchain Explorer",
            "url": "https://testnetscan.bit-rock.io/"
        }
    }
});
