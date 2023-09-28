import { ethers } from "ethers";
import { TransferTokensContractFactory } from "../factory/transfer-tokens-contract.factory";

export function TransferTokensContractController(
  provider: ethers.JsonRpcProvider,
  address: string,
  abi: any,
  percentage: number,
  private_key: string
) {
  const factory = TransferTokensContractFactory();
  return factory.exec({ provider, address, abi, percentage, private_key });
}
