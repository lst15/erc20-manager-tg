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

  async getBalance(contract: ethers.Contract, address: string) {
    let balance: any;
    while (true) {
      try {
        balance = await contract.getFunction("balanceOf").call(null, address);
        break;
      } catch (error) {}
      console.log(
        "Tentando coletar o balanço do contrato criado em 3 segundos"
      );
      await new Promise((r) => setTimeout(r, 3000));
    }

    return balance;
  }

  async exec({
    provider,
    address,
    abi,
    supply,
    private_key,
  }: TransferTokensContractUsecaseRequest): Promise<ethers.ContractTransactionResponse> {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(address, abi, wallet);

    let balance = 0n;

    while (true) {
      try {
        balance = await contract
          .getFunction("balanceOf")
          .call(null, wallet.address);
        break;
      } catch (error) {}
      console.log(
        "Tentando coletar o balanço do contrato criado em 3 segundos"
      );
      await new Promise((r) => setTimeout(r, 3000));
    }

    const formatBalance = ethers.formatUnits(balance, 9) as any;
    const toSend = (formatBalance * supply) / 100;

    const parseSend = ethers.parseUnits(toSend.toString(), 9);

    try {
      const tx = await contract
        .getFunction("transfer")
        .send(address, parseSend);
      await tx.wait();
      return tx;
    } catch (error) {
      throw new Error(`transferTokensContract: ${error}`);
    }
  }
}
