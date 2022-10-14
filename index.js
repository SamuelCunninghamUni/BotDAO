// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// Setup: npm install alchemy-sdk
import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Print NFT metadata returned in the response:
alchemy.nft.getNftMetadata(
  "0x5f15822427a9fff196b3FB9f9BF4F6552b695960",
  "1590"
).then(console.log);


// Print the NFT floor price for a contract
function getFloorPrice(){
    alchemy.nft
  .getFloorPrice("0x5f15822427a9fff196b3FB9f9BF4F6552b695960")
  .then(console.log);
}

function getAllNFTs(){
    var tokenID = 0;
    while (tokenID <= 20) {
        // Print NFT metadata returned in the response:
    alchemy.nft.getNftMetadata(
        "0x5f15822427a9fff196b3FB9f9BF4F6552b695960",
        tokenID
    ).then(console.log);
    //TODO: check each metadata for being a legendary
    tokenID++;
    }
}





getFloorPrice();
getAllNFTs();