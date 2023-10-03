import { abi } from "../../contract/abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { RemoveLimitsRequestModel } from "../../model/telegram/actions/remove-limits-request.model";
import { RemoveLimitsContractController } from "../controller/contract/remove-limits-contract.controller";

export async function Rmlimits({ address }: RemoveLimitsRequestModel) {
  const opened = await RemoveLimitsContractController(
    abi,
    address,
    env.PRIVATE_KEY,
    ethersProvider
  );

  return opened;
}
