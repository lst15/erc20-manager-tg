import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { BurnTokensContractUseCase } from "../../usecases/contract/burn-tokens-contract.usecase";

export function BurnTokensContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new BurnTokensContractUseCase(web3Repository);
}
