const fs = require('fs');
const Web3 = require('web3').default;
const { interface, bytecode } = require('./compile');

const web3 = new Web3(('http://localhost:8545'));

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  fs.writeFileSync(
    '../client/src/contractAddress.js',
    `export const contractAddress = '${result.options.address}'`
  );
};

deploy();