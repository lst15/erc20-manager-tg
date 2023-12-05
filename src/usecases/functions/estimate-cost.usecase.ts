import { ethers } from "ethers";
import { InsufficientFunds } from "../../errors/insufficient_funds.error";
import { Web3Repository } from "../../repositories/web3.repository";

interface EstimateCostUseCaseRequest {
  private_key: string;
  provider: ethers.JsonRpcProvider;
  abi: any;
  bytecode: string;
}

export class EstimateCostUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    private_key,
    provider,
    abi,
    bytecode,
  }: EstimateCostUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contractFactory = this.web3Repository.ContractFactory(
      abi,
      bytecode,
      wallet
    );

    const estimatedGas: any = await provider.estimateGas(
      await contractFactory.getDeployTransaction()
    );

    const currentGasPrice: any =
      ((await provider.getFeeData()).gasPrice as bigint) + 5000000000n;

    return [
      currentGasPrice * estimatedGas,
      currentGasPrice,
      5000000,
      estimatedGas,
      currentGasPrice * 5000000n,
    ];
  }
}
