// // const output = require("../bin/src/contract/EtherContract.json");
// // import { ethers } from "ethers";

import { abi } from "./contract/abi-contract";
import { code } from "./contract/code-contract";
import { DeployContractController } from "./controller/deploy-contract.controller";
import { GenByteContractController } from "./controller/gen-byte-contract.controller";
import { SetNameContactController } from "./controller/set-name-contract.controller";
import { env } from "./env-schema";
import { ethersProvider } from "./lib/ethers-provider";
const solc = require("solc");

// import { ethers } from "ethers";
// import { DeployContractController } from "./controller/deploy-contract.controller";
// import { env } from "./env-schema";
// import { ethersProvider } from "./lib/ethers-provider";

// // (async () => {
// //   const provider = new ethers.JsonRpcProvider(
// //     "https://bsc.getblock.io/08839fa5-e437-405d-a1f3-217b5433b178/testnet/"
// //   );
// //   const wallet = new ethers.Wallet(
// //     "5bf009ee8bf7652b3010af8b398306a76fb3b9087b4e155fea55992ec9bf7fed",
// //     provider
// //   );
// //   wallet.getAddress().then(console.log);
// //   const contractInstance = new ethers.ContractFactory(
// //     output.abi,
// //     output.bytecode,
// //     wallet
// //   );
// //   await contractInstance.deploy();
// // })();
// (async () => {
//   const output = require("../bin/src/contract/EtherContract.json");

//   const deploy = await DeployContractController(
//     env.PRIVATE_KEY,
//     ethersProvider,
//     output.abi,
//     output.bytecode
//   );
//   console.log(deploy);
// })();

// (async () => {
//   let rename = code.split('unicode"NOBODY"').join('unicode"CAFE"');

//   const input = {
//     language: "Solidity",
//     sources: {
//       "Elon.sol": {
//         content: rename,
//       },
//     },
//     settings: {
//       outputSelection: {
//         "*": {
//           "*": ["*"],
//         },
//       },
//     },
//   };

//   getting the development snapshot
//   solc.loadRemoteVersion(
//     "v0.8.10+commit.fc410830",
//     async function (
//       err: any,
//       solcSnapshot: { compile: (contract: string) => any }
//     ) {
//       if (err) {
//         console.log(err);
//         An error was encountered, display and quit
//       } else {
//         const compiledContract = JSON.parse(
//           solcSnapshot.compile(JSON.stringify(input))
//         );
//         const bytecode =
//           compiledContract.contracts["Elon.sol"]["Elon"].evm.bytecode.object;

//         const deploy = await DeployContractController(
//           env.PRIVATE_KEY,
//           ethersProvider,
//           abi,
//           bytecode
//         );
//         console.log(deploy);
//       }
//     }
//   );

//const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
//const bytecode =
//compiledContract.contracts["Elon.sol"]["Elon"].evm.bytecode.object;
//console.log(compiledContract);
// const deploy = await DeployContractController(
//   env.PRIVATE_KEY,
//   ethersProvider,
//   abi,
//   bytecode
// );
// console.log(deploy);
//})();

(async () => {
  const codeWithName = SetNameContactController("Babuino", "BBI", code);
  const bytecode = await GenByteContractController("Elon.sol", codeWithName);

  const deploy = await DeployContractController(
    env.PRIVATE_KEY,
    ethersProvider,
    abi,
    bytecode
  );
  console.log(deploy);
})();
