import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { RemoveLimitsContractUseCase } from "../../usecases/contract/remove-limits-contract.usecase";

export function RemoveLimitsContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new RemoveLimitsContractUseCase(web3Repository);
}
