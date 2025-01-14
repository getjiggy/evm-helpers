require('@matterlabs/hardhat-zksync-deploy');
require('@matterlabs/hardhat-zksync-solc');
require('@matterlabs/hardhat-zksync-verify');
require('@nomicfoundation/hardhat-verify');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('solidity-coverage');
require('hardhat-tracer');

const { networks, etherscan } = require('./hardhat.networks');

module.exports = {
    etherscan,
    solidity: {
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
            viaIR: true,
        },
        version: '0.8.19',
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks,
    zksolc: {
        version: '1.3.13',
        compilerSource: 'binary',
        settings: {},
    },
};
