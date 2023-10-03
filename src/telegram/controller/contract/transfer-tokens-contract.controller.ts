import { ethers } from "ethers";
import { TransferTokensContractFactory } from "../../../factory/contract/transfer-tokens-contract.factory";

export function TransferTokensContractController(
  provider: ethers.JsonRpcProvider,
  address: string,
  abi: any,
  supply: number,
  private_key: string
) {
  const factory = TransferTokensContractFactory();
  return factory.exec({ provider, address, abi, supply, private_key });
}
