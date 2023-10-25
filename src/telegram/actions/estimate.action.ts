import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { DeployContractController } from "../controller/functions/deploy-contract.controller";
import { EstimateCostController } from "../controller/functions/estimate-cost.controller";
import { SetNameContactController } from "../controller/manager/set-name-contract.controller";
import { Erc20code } from "../../contracts/erc20/erc20-code-contract";
import { GenByteContractController } from "../controller/functions/gen-byte-contract.controller";
import { ethers } from "ethers";

export async function EstimateCostAction() {
  const token_code = SetNameContactController("name", "name", Erc20code);
  const bytecode = await GenByteContractController("Elon.sol", token_code);

  const estimateValue = await EstimateCostController(
    env.PRIVATE_KEY,
    ethersProvider,
    Erc20Abi,
    bytecode
  );

  const ether = Number(ethers.formatEther(estimateValue[0])).toFixed(5);
  const gasPrice = Number(ethers.formatUnits(estimateValue[1], 10)).toFixed(5);
  const expectedCost = Number(ethers.formatEther(estimateValue[4])).toFixed(5);
  return [ether, gasPrice, estimateValue[2], estimateValue[3], expectedCost];
}
