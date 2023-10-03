import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { TransferTokensContractUseCase } from "../../usecases/contract/transfer-tokens-contract.usecase";

export function TransferTokensContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new TransferTokensContractUseCase(web3Repository);
}
