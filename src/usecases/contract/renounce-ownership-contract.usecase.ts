import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";

interface RenounceOwnershipContractUseCaseRequest {
  address: string;
  private_key: string;
  provider: ethers.JsonRpcProvider;
  abi: any;
}

export class RenounceOwnershipContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    abi,
    address,
    private_key,
    provider,
  }: RenounceOwnershipContractUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(address, abi, wallet);
    return await contract.getFunction("renounceOwnership").send();
  }
}
