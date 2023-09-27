import { Web3Repository } from "../web3.repository";
import { ethers } from "ethers";

export class EthersWeb3Repository implements Web3Repository {
  isErc20Address(address: string): boolean {
    return ethers.isAddress(address);
  }
}
