import { ethers } from "ethers";
import { RemoveLimitsContractFactory } from "../../../factory/contract/remove-limits-contract.factory";

export function RemoveLimitsContractController(
  abi: any,
  address: string,
  private_key: string,
  provider: ethers.JsonRpcProvider
) {
  const factory = RemoveLimitsContractFactory();
  return factory.exec({ abi, address, private_key, provider });
}
