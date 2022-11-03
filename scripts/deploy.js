
const { ethers } = require("hardhat");

async function main() {

  const quicknodeNft = await ethers.getContractFactory("quicknodeNft");

  
  const quicknodenft = await quicknodeNft.deploy();

  
  await quicknodenft.deployed();

  
  console.log("NFT Contract Address:", quicknodenft.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });