const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, '../contracts/ArtRegistry.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'ArtRegistry.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['ArtRegistry.sol'].ArtRegistry;

module.exports = {
  interface: contract.abi,
  bytecode: contract.evm.bytecode.object
};