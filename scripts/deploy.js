const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const DecentralCordFactory = await ethers.getContractFactory("DecentralCord");
  console.log("deploying...");
  const DecentralCord = await DecentralCordFactory.deploy();
  await DecentralCord.deployed();
  console.log("Contract deployed...");
  const ContractAddres = await DecentralCord.address
  console.log(`Contract deployed to ${ContractAddres}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
