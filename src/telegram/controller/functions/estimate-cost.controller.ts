import { ethers } from "ethers";
import { DeployContractFactory } from "../../../factory/functions/deploy-contract.factory";
import { EstimateCostFactory } from "../../../factory/functions/estimate-cost.factory";

export function EstimateCostController(
  private_key: string,
  provider: ethers.JsonRpcProvider,
  abi: any,
  bytecode: string
) {
  const factory = EstimateCostFactory();
  const executed = factory.exec({ private_key, provider, abi, bytecode });
  return executed;
}
