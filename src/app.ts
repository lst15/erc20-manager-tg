// const output = require("../bin/src/contract/EtherContract.json");
// import { ethers } from "ethers";

import { ethers } from "ethers";
import { DeployContractController } from "./controller/deploy-contract.controller";
import { env } from "./env-schema";

// (async () => {
//   const provider = new ethers.JsonRpcProvider(
//     "https://bsc.getblock.io/08839fa5-e437-405d-a1f3-217b5433b178/testnet/"
//   );
//   const wallet = new ethers.Wallet(
//     "5bf009ee8bf7652b3010af8b398306a76fb3b9087b4e155fea55992ec9bf7fed",
//     provider
//   );
//   wallet.getAddress().then(console.log);
//   const contractInstance = new ethers.ContractFactory(
//     output.abi,
//     output.bytecode,
//     wallet
//   );
//   await contractInstance.deploy();
// })();
(async () => {
  const output = require("../bin/src/contract/EtherContract.json");

  const provider = new ethers.JsonRpcProvider(
    "https://bsc.getblock.io/08839fa5-e437-405d-a1f3-217b5433b178/testnet/"
  );

  const deploy = await DeployContractController(
    env.PRIVATE_KEY,
    provider,
    output.abi,
    output.bytecode
  );
  console.log(deploy);
})();
