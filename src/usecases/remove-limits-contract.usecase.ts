import { ethers } from "ethers";
import { Web3Repository } from "../repositories/web3.repository";

interface RemoveLimitsContractUseCaseRequest {
  address: string;
  abi: any;
  provider: ethers.JsonRpcProvider;
  private_key: string;
}

export class RemoveLimitsContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    abi,
    address,
    private_key,
    provider,
  }: RemoveLimitsContractUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(address, abi, wallet);
    return await contract.getFunction("removeLimits").send();
  }
}
