# Digital Art Authentication System

A blockchain-based solution for authenticating and tracking digital art ownership.

## Features

- Blockchain-based art registration
- Immutable ownership records
- IPFS storage for artwork metadata
- Verification system for authenticity
- User-friendly web interface

## Technology Stack

- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Frontend**: React.js
- **Backend**: Node.js/Express
- **Storage**: IPFS
- **UI**: Tailwind CSS

## Setup Instructions

1. Install dependencies:
```bash
npm install
cd client && npm install 
cd ..
```

1. install ganache-cli:
    run it on the background 
```bash 
ganache-cli

2. install truffle
   check the version using 
```bash 
truffle version
mkdir my-truffle-project
cd my-truffle-project
truffle init
truffle compile
cd ..

3. install solc@0.8.0
```bash
npm install solc@0.8.0


4. Compile smart contracts:
```bash
npm run compile
```

5. Deploy contracts (requires local Ethereum node):
```bash
npm run deploy
```

6. Start development servers:
```bash
npm run dev
```

## Project Structure

- `/contracts`: Smart contract source files
- `/client`: React frontend application
- `/server`: Node.js backend API
- `/scripts`: Deployment and utility scripts

## Environment Variables

Create a `.env` file in the root directory with:

```
INFURA_PROJECT_ID=your_infura_project_id
MNEMONIC=your_wallet_mnemonic
```

## License

MIT
