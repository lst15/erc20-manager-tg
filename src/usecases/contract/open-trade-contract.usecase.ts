import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";

interface OpenTradeContractUseCaseRequest {
  address: string;
  private_key: string;
  provider: ethers.JsonRpcProvider;
  abi: any;
}

export class OpenTradeContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    address,
    private_key,
    provider,
    abi,
  }: OpenTradeContractUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(address, abi, wallet);
    const tx = await contract.getFunction("openTrading").send();
    await tx.wait();
  }
}
