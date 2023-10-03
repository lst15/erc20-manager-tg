import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";

interface TransferTokensContractUsecaseRequest {
  address: string;
  abi: any;
  provider: ethers.JsonRpcProvider;
  supply: number;
  private_key: string;
}

export class TransferTokensContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    provider,
    address,
    abi,
    supply,
    private_key,
  }: TransferTokensContractUsecaseRequest): Promise<ethers.ContractTransactionResponse> {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(address, abi, wallet);
    const balance = await contract
      .getFunction("balanceOf")
      .call(null, wallet.address);

    const formatBalance = ethers.formatUnits(balance, 9) as any;
    const toSend = (formatBalance * supply) / 100;

    const parseSend = ethers.parseUnits(toSend.toString(), 9);

    try {
      return await contract.getFunction("transfer").send(address, parseSend);
    } catch (error) {
      throw new Error(`transferTokensContract: ${error}`);
    }
  }
}
