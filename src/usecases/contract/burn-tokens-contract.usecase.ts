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
    const balance = await contract
      .getFunction("balanceOf")
      .call(null, wallet.address);

    const formatBalance = ethers.formatUnits(balance, 9) as any;
    const toSend = (formatBalance * value) / 100;

    const parseSend = ethers.parseUnits(toSend.toString(), 9);

    return await contract
      .getFunction("transfer")
      .send("0x000000000000000000000000000000000000dEaD", parseSend);
  }
}
