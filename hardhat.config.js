require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync("secret").toString().trim() || "01234567890123456789";
// if using infura
const infuraId = fs.readFileSync("infuraid").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      //if using Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    },
    matic: {
      //if using Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}