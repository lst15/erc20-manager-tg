import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { GetPairContractUseCase } from "../../usecases/contract/get-pair-contract.usecase";

export function GetPairContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new GetPairContractUseCase(web3Repository);
}
