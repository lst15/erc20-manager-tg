import { ethers } from "ethers";
import { TransferEthFactory } from "../../../factory/functions/transfer-eth.factory";

export function TransferEthController(
  provider: ethers.JsonRpcProvider,
  address: string,
  eth: number,
  private_key: string
) {
  const factory = TransferEthFactory();
  return factory.exec({ provider, address, eth, private_key });
}
