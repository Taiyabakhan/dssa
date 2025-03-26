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
```

2. Compile smart contracts:
```bash
npm run compile
```

3. Deploy contracts (requires local Ethereum node):
```bash
npm run deploy
```

4. Start development servers:
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