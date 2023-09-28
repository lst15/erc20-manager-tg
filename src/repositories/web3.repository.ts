import { ethers } from "ethers";

export interface Web3Repository {
  IsErc20Address(address: string): boolean;
  Wallet(private_key: string, provider: ethers.JsonRpcProvider): ethers.Wallet;
  ContractFactory(
    abi: any,
    bytecode: string,
    wallet: ethers.Wallet
  ): ethers.ContractFactory;

  setContract(
    address: string,
    abi: string,
    provider: ethers.Wallet
  ): ethers.Contract;
}
