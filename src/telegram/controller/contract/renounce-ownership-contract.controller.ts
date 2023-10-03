import { ethers } from "ethers";
import { RenounceOwnershipContractFactory } from "../../../factory/contract/renounce-ownership-contract.factory";

export function RenounceOwnershipContractController(
  abi: any,
  address: string,
  private_key: string,
  provider: ethers.JsonRpcProvider
) {
  const factory = RenounceOwnershipContractFactory();
  return factory.exec({ abi, address, private_key, provider });
}
