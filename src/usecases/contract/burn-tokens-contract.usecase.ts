import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";
import { env } from "../../env-schema";

interface BurnTokensContractUsecaseRequest {
  abi: any;
  provider: ethers.JsonRpcProvider;
  value: number;
  private_key: string;
  token_address: string;
}

export class BurnTokensContractUseCase {
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
    abi,
    value,
    private_key,
    token_address,
  }: BurnTokensContractUsecaseRequest): Promise<ethers.ContractTransactionResponse> {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(
      token_address,
      abi,
      wallet
    );

    let balance = 0n;
    console.log(token_address, "olha aqi");

    while (true) {
      try {
        balance = await contract
          .getFunction("balanceOf")
          .call(null, wallet.address);
        break;
      } catch (error) {
        console.log("Tentando em 3 segundos");
        await new Promise((r) => setTimeout(r, 3000));
      }
    }

    const formatBalance = ethers.formatUnits(balance, 18) as any;
    const toSend = ((formatBalance * value) / 100).toFixed(18);

    const parseSend = ethers.parseUnits(toSend.toString(), 18);

    return await contract
      .getFunction("transfer")
      .send("0x000000000000000000000000000000000000dEaD", parseSend);
  }
}
