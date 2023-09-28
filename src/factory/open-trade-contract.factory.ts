import { EthersWeb3Repository } from "../repositories/implementations/ethers-web3.repository";
import { OpenTradeContractUseCase } from "../usecases/open-trade-contract.usecase";

export function OpenTradeContractFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new OpenTradeContractUseCase(web3Repository);
}
