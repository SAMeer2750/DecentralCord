require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

P_K = process.env.PRIVATE_KEY;
const POLYGON_MUMBAI_RPC = process.env.POLYGON_MUMBAI_RPC
const POLYGON_MUMBAI_KEY = process.env.POLYGON_MUMBAI_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GOERLI_KEY = process.env.GOERLI_KEY

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
            },
        ],
    },
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
            gas: 50000000,
            maxFeePerGas: 250000000000,
            maxPriorityFeePerGas: 250000000000,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [GOERLI_KEY],
            gas: 50000000,
            maxFeePerGas: 250000000000,
            maxPriorityFeePerGas: 250000000000,
        },
        polygon: {
            chainId: 80001,
            blockConfirmations: 6,
            url: POLYGON_MUMBAI_RPC,
            accounts: [POLYGON_MUMBAI_KEY],
            gas: 50000000,
            maxFeePerGas: 250000000000,
            maxPriorityFeePerGas: 250000000000,
        },
        mantle: {
            url: "https://rpc.testnet.mantle.xyz/",
            accounts: [P_K],
            chainId: 5001,
        },
    },
}  
