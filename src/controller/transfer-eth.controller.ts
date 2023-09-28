import { ethers } from "ethers";
import { TransferEthFactory } from "../factory/transfer-eth.factory";

export function TransferEthController(
  provider: ethers.JsonRpcProvider,
  address: string,
  quantity: number,
  private_key: string
) {
  const factory = TransferEthFactory();
  return factory.exec({ provider, address, quantity, private_key });
}
