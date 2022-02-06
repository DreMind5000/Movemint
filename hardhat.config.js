require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
 const privateKey = fs.readFileSync(".secret").toString()
const infuraId = fs.readFileSync(".infuraid").toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  
    mumbai: {
       url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    matic: {
   
       url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
     
      accounts: [privateKey]
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
  }
};

