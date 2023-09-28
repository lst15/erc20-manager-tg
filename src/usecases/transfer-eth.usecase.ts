import { ethers } from "ethers";
import { Web3Repository } from "../repositories/web3.repository";

interface TransferEthUseCaseRequest {
  address: string;
  quantity: number;
  private_key: string;
  provider: ethers.JsonRpcProvider;
}

export class TransferEthUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    address,
    quantity,
    private_key,
    provider,
  }: TransferEthUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const toSend = ethers.parseEther(quantity.toString());

    return await wallet.sendTransaction({
      to: address,
      value: toSend,
    });
  }
}
