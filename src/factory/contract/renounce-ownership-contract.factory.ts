import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { RenounceOwnershipContractUseCase } from "../../usecases/contract/renounce-ownership-contract.usecase";

export function RenounceOwnershipContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new RenounceOwnershipContractUseCase(web3Repository);
}
