// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArtRegistry {
    struct Artwork {
        string title;
        string artist;
        string ipfsHash;
        uint256 timestamp;
        address owner;
    }

    mapping(uint256 => Artwork) public artworks;
    uint256 public artworkCount;

    event ArtworkRegistered(
        uint256 id,
        string title,
        string artist,
        string ipfsHash,
        uint256 timestamp,
        address owner
    );

    event OwnershipTransferred(
        uint256 id,
        address previousOwner,
        address newOwner
    );

    function registerArtwork(
        string memory _title,
        string memory _artist,
        string memory _ipfsHash
    ) public {
        artworkCount++;
        artworks[artworkCount] = Artwork(
            _title,
            _artist,
            _ipfsHash,
            block.timestamp,
            msg.sender
        );
        emit ArtworkRegistered(
            artworkCount,
            _title,
            _artist,
            _ipfsHash,
            block.timestamp,
            msg.sender
        );
    }

    function transferOwnership(uint256 _id, address _newOwner) public {
        require(artworks[_id].owner == msg.sender, "Not the owner");
        address previousOwner = artworks[_id].owner;
        artworks[_id].owner = _newOwner;
        emit OwnershipTransferred(_id, previousOwner, _newOwner);
    }

    function verifyArtwork(uint256 _id) public view returns (
        string memory title,
        string memory artist,
        string memory ipfsHash,
        uint256 timestamp,
        address owner
    ) {
        Artwork memory artwork = artworks[_id];
        return (
            artwork.title,
            artwork.artist,
            artwork.ipfsHash,
            artwork.timestamp,
            artwork.owner
        );
    }
}