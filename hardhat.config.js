require("@nomicfoundation/hardhat-toolbox")


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url:'<url de alchemi>',
      accounts: [
        '<clave privade de metamask>'
      ]
    }
  }
};
