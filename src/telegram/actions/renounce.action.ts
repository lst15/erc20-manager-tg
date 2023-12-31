import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { RenounceRequestModel } from "../../model/telegram/actions/renounce-request.model";
import { RenounceOwnershipContractController } from "../controller/contract/renounce-ownership-contract.controller";

export async function RenounceAction({ address }: RenounceRequestModel) {
  const opened = await RenounceOwnershipContractController(
    Erc20Abi,
    address,
    env.PRIVATE_KEY,
    ethersProvider
  );

  return opened;
}
