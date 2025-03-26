const express = require('express');
const Web3 = require('web3');
const { create } = require('ipfs-http-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Initialize IPFS
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Digital Art Authentication System');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});