import { Web3Repository } from "../web3.repository";
import { ethers } from "ethers";

export class EthersWeb3Repository implements Web3Repository {
  setContract(
    address: string,
    abi: string,
    provider: ethers.Wallet
  ): ethers.Contract {
    return new ethers.Contract(address, abi, provider);
  }
  Wallet(private_key: string, provider: ethers.JsonRpcProvider): ethers.Wallet {
    return new ethers.Wallet(private_key, provider);
  }

  ContractFactory(
    abi: any,
    bytecode: string,
    wallet: ethers.Wallet
  ): ethers.ContractFactory<any[], ethers.BaseContract> {
    return new ethers.ContractFactory(abi, bytecode, wallet);
  }

  IsErc20Address(address: string): boolean {
    return ethers.isAddress(address);
  }
}
