import { abi } from "../../contract/abi-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { OpentradeRequestModel } from "../../model/telegram/actions/opentrade-request.model";
import { OpenTradeContractController } from "../controller/contract/open-trade-contract.controller";

export async function OpentradeAction({ address }: OpentradeRequestModel) {
  const opened = await OpenTradeContractController(
    abi,
    address,
    env.PRIVATE_KEY,
    ethersProvider
  );

  return opened;
}
