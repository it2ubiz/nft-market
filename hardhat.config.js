/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: 'infura.url',
      accounts: [privateKey],
      network_id: 3
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
    etherscan: {
      apiKey: 'etherscan-api-key',
  },
}