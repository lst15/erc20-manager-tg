import { ethers } from "ethers";
import { OpenTradeContractFactory } from "../../../factory/contract/open-trade-contract.factory";

export function OpenTradeContractController(
  abi: any,
  address: string,
  private_key: string,
  provider: ethers.JsonRpcProvider
) {
  const factory = OpenTradeContractFactory();
  return factory.exec({ abi, address, private_key, provider });
}
