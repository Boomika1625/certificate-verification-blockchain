/**
 * Truffle configuration file
 * Project: Blockchain-Based Secure Certificate Verification System
 * Solidity Version: 0.5.16
 * Network: Ganache (Local Blockchain)
 */

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",     // Localhost (Ganache)
      port: 7545,            // Ganache RPC port
      network_id: "*"        // Accept any network id
    }
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.5.16",    // MUST match `pragma solidity ^0.5.16`
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
