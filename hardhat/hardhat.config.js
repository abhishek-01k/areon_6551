require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.20" },
      { version: "0.8.11" },
      { version: "0.8.12" },
      { version: "0.8.19" },
      { version: "0.8.7" },
    ],
  },
};
