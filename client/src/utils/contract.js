import Web3 from 'web3';
import ArtRegistry from '../contracts/ArtRegistry.json';
import { contractAddress } from './contractAddress';

export const loadContract = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  const web3 = new Web3(window.ethereum);
  const networkId = await web3.eth.net.getId();
  
  if (ArtRegistry.networks[networkId]) {
    const contract = new web3.eth.Contract(
      ArtRegistry.abi,
      contractAddress || ArtRegistry.networks[networkId].address
    );
    return contract;
  }
  
  throw new Error('Contract not deployed on this network');
};

export const registerArtwork = async (contract, account, title, artist, ipfsHash) => {
  return contract.methods
    .registerArtwork(title, artist, ipfsHash)
    .send({ from: account });
};

export const transferOwnership = async (contract, account, artworkId, newOwner) => {
  return contract.methods
    .transferOwnership(artworkId, newOwner)
    .send({ from: account });
};

export const verifyArtwork = async (contract, artworkId) => {
  return contract.methods.verifyArtwork(artworkId).call();
};