require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

P_K = process.env.PRIVATE_KEY;

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
            },
        ],
    },
    networks: {
      hardhat: {},
      mantle: {
          url: "https://rpc.testnet.mantle.xyz/",
          accounts: [P_K],
          chainId: 5001,
      },
    },
}  
