import { EthersWeb3Repository } from "../repositories/implementations/ethers-web3.repository";
import { TransferEthUseCase } from "../usecases/transfer-eth.usecase";

export function TransferEthFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new TransferEthUseCase(web3Repository);
}
