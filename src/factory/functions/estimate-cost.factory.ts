import { EthersWeb3Repository } from "../../repositories/implementations/ethers-web3.repository";
import { EstimateCostUseCase } from "../../usecases/functions/estimate-cost.usecase";

export function EstimateCostFactory() {
  const web3Repository = new EthersWeb3Repository();
  return new EstimateCostUseCase(web3Repository);
}
