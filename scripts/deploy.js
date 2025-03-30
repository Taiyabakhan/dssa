const fs = require('fs');
const Web3 = require('web3').default;
const { interface, bytecode } = require('./compile');

const web3 = new Web3('http://localhost:8545');

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const contract = new web3.eth.Contract(interface);

    const result = await contract
      .deploy({ data: bytecode })
      .send({ gas: '1000000', from: accounts[0], gasPrice: '20000000000' }); // Set gasPrice explicitly

    console.log('Contract deployed to', result.options.address);

    fs.writeFileSync(
      '../client/src/contractAddress.js',
      `export const contractAddress = '${result.options.address}';`
    );
  } catch (error) {
    console.error('Deployment failed:', error);
  }
};

deploy();
