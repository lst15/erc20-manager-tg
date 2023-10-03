import { ethers } from "ethers";
import { GetPairContractFactory } from "../../../factory/contract/get-pair-contract.factory";

export function GetPairContractController(
  tokenA: string,
  tokenB: string,
  factoryAddress: string,
  private_key: string,
  provider: ethers.JsonRpcProvider,
  factoryAbi: any
) {
  const factory = GetPairContractFactory();
  return factory.exec({
    factoryAbi,
    factoryAddress,
    private_key,
    provider,
    tokenA,
    tokenB,
  });
}
