import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { RemoveLimitsRequestModel } from "../../model/telegram/actions/remove-limits-request.model";
import { RemoveLimitsContractController } from "../controller/contract/remove-limits-contract.controller";

export async function RmlimitsAction({ address }: RemoveLimitsRequestModel) {
  const opened = await RemoveLimitsContractController(
    Erc20Abi,
    address,
    env.PRIVATE_KEY,
    ethersProvider
  );

  return opened;
}
