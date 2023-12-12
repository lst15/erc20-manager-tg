import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";
import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";

interface TransferEthUseCaseRequest {
  address: string;
  eth: number;
  private_key: string;
  provider: ethers.JsonRpcProvider;
}

export class TransferEthUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    address,
    eth,
    private_key,
    provider,
  }: TransferEthUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const toSend = ethers.parseEther(eth.toString());

    const tx = await wallet.sendTransaction({
      to: address,
      value: toSend,
    });

    //while (true) {
    //provider.getBalance(address)
    await tx.wait();
    //}

    return tx;
  }
}
