import { ethers } from "ethers";
import { InsufficientFunds } from "../errors/insufficient_funds.error";
import { Web3Repository } from "../repositories/web3.repository";

interface DeployContractUseCaseRequest {
  private_key: string;
  provider: ethers.JsonRpcProvider;
  abi: any;
  bytecode: string;
}

export class DeployContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    private_key,
    provider,
    abi,
    bytecode,
  }: DeployContractUseCaseRequest): Promise<
    | (ethers.BaseContract & {
        deploymentTransaction(): ethers.ContractTransactionResponse;
      } & Omit<ethers.BaseContract, keyof ethers.BaseContract>)
    | undefined
  > {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contractFactory = this.web3Repository.ContractFactory(
      abi,
      bytecode,
      wallet
    );

    try {
      return await contractFactory.deploy();
    } catch (error: any) {
      const code = error.code;

      if (code == "INSUFFICIENT_FUNDS") {
        throw new InsufficientFunds();
      }

      throw error;
    }
  }
}
