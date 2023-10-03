import { abi } from "../../contract/abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { BurnRequestModel } from "../../model/telegram/actions/burn-request.model";
import { RemoveLimitsRequestModel } from "../../model/telegram/actions/remove-limits-request.model";
import { BurnTokensContractController } from "../controller/contract/burn-tokens-contract.controller";

export async function BurnAction({ address, value }: BurnRequestModel) {
  const opened = await BurnTokensContractController(
    abi,
    env.PRIVATE_KEY,
    ethersProvider,
    value,
    address
  );

  return opened;
}
