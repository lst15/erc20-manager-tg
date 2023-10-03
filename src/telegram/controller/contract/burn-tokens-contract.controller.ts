import { ethers } from "ethers";
import { BurnTokensContractFactory } from "../../../factory/contract/burn-tokens-contract.factory";

export function BurnTokensContractController(
  abi: any,
  private_key: string,
  provider: ethers.JsonRpcProvider,
  value: number,
  token_address: string
) {
  const factory = BurnTokensContractFactory();
  return factory.exec({
    abi,
    private_key,
    provider,
    value,
    token_address,
  });
}
