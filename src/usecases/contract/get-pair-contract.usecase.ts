import { ethers } from "ethers";
import { Web3Repository } from "../../repositories/web3.repository";

interface GetPairContractUseCaseRequest {
  tokenA: string;
  tokenB: string;
  factoryAddress: string;
  private_key: string;
  provider: ethers.JsonRpcProvider;
  factoryAbi: any;
}

export class GetPairContractUseCase {
  constructor(private web3Repository: Web3Repository) {}

  async exec({
    factoryAddress,
    tokenA,
    tokenB,
    factoryAbi,
    private_key,
    provider,
  }: GetPairContractUseCaseRequest) {
    const wallet = this.web3Repository.Wallet(private_key, provider);
    const contract = this.web3Repository.setContract(
      factoryAddress,
      factoryAbi,
      wallet
    );
    console.log(tokenA, tokenB);
    return await contract.getFunction("getPair").call(null, tokenA, tokenB);
  }
}
