const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const DecentralCordFactory = await ethers.getContractFactory("DecentralCord");
  console.log("deploying...");
  const DecentralCord = await DecentralCordFactory.deploy();
  await DecentralCord.deployed();
  console.log("Contract deployed...");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
