// // const output = require("../bin/src/contract/EtherContract.json");
// // import { ethers } from "ethers";

import { abi } from "./contract/abi-contract";
import { code } from "./contract/code-contract";
import { BurnTokensContractController } from "./controller/burn-tokens-contract.controller";
import { DeployContractController } from "./controller/deploy-contract.controller";
import { GenByteContractController } from "./controller/gen-byte-contract.controller";
import { OpenTradeContractController } from "./controller/open-trade-contract.controller";
import { RemoveLimitsContractController } from "./controller/remove-limits-contract.controller";
import { SetNameContactController } from "./controller/set-name-contract.controller";
import { TransferEthController } from "./controller/transfer-eth.controller";
import { TransferTokensContractController } from "./controller/transfer-tokens-contract.controller";
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

// (async () => {
//   // const transferTokens = TransferTokensContractController(
//   //   ethersProvider,
//   //   "0x7a4b403448ef5ea4a5fe427f52e1856fbe2359e7",
//   //   abi,
//   //   1,
//   //   env.PRIVATE_KEY
//   // );
//   const codeWithName = SetNameContactController("Babuino", "BBI", code);
//   const bytecode = await GenByteContractController("Elon.sol", code);

//   const deploy = await DeployContractController(
//     env.PRIVATE_KEY,
//     ethersProvider,
//     abi,
//     bytecode
//   );
//   console.log(deploy);
// })();

// (async () => {
//   const sendEth = await TransferEthController(
//     ethersProvider,
//     "0x7a4b403448ef5ea4a5fe427f52e1856fbe2359e7",
//     0.01,
//     env.PRIVATE_KEY
//   );
//   console.log(sendEth);
// })();

// (async () => {
//   const open = await OpenTradeContractController(
//     abi,
//     "0xAD9794dD085BfEE872D137bA6Cf4AF4f995Ac26e",
//     env.PRIVATE_KEY,
//     ethersProvider
//   );
//   console.log(open);
// })();

// (async () => {
//   const remove = await RemoveLimitsContractController(
//     abi,
//     "0xAD9794dD085BfEE872D137bA6Cf4AF4f995Ac26e",
//     env.PRIVATE_KEY,
//     ethersProvider
//   );

//   console.log(remove);
// })();

export async function deployToken(token_name: string, symbol: string) {
  const token_code = SetNameContactController(token_name, symbol, code);
  const bytecode = await GenByteContractController("Elon.sol", token_code);
  const contract = await DeployContractController(
    env.PRIVATE_KEY,
    ethersProvider,
    abi,
    bytecode
  );

  return contract;
}

export async function tokenTransfer(token_address: string, percentage: number) {
  return await TransferTokensContractController(
    ethersProvider,
    token_address,
    abi,
    percentage,
    env.PRIVATE_KEY
  );
}

export async function ethTransfer(token_address: string, eth_lp: number) {
  return await TransferEthController(
    ethersProvider,
    token_address,
    eth_lp,
    env.PRIVATE_KEY
  );
}

export async function openTrading(token_address: string) {
  return await OpenTradeContractController(
    abi,
    token_address,
    env.PRIVATE_KEY,
    ethersProvider
  );
}

export async function burnTokens(token_address: string, value: number) {
  return await BurnTokensContractController(
    abi,
    env.PRIVATE_KEY,
    ethersProvider,
    value,
    token_address
  );
}

export async function removeLimits(token_address: string) {
  return await RemoveLimitsContractController(
    abi,
    token_address,
    env.PRIVATE_KEY,
    ethersProvider
  );
}
