import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { DeployContractUseCase } from "../../usecases/functions/deploy-contract.usecase";

export function DeployContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new DeployContractUseCase(web3Repository);
}
