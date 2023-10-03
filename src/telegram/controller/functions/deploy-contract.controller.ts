import { ethers } from "ethers";
import { DeployContractFactory } from "../../../factory/functions/deploy-contract.factory";

export function DeployContractController(
  private_key: string,
  provider: ethers.JsonRpcProvider,
  abi: any,
  bytecode: string
) {
  const factory = DeployContractFactory();
  const executed = factory.exec({ private_key, provider, abi, bytecode });
  return executed;
}
