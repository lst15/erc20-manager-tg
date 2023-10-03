import { env } from "../../env-schema";
import { setProvider } from "../../lib/ethers-provider";
import { AmbientRequestModel } from "../../model/telegram/actions/ambient-request.model";

export function AmbientAction({ ambient }: AmbientRequestModel) {
  if (ambient == "mainnet") {
    setProvider(env.MAINNET_ENDPOINT_RPC);
    env.BLOCKSCAN = env.MAINNET_BLOCKSCAN;
  }

  if (ambient == "testnet") {
    setProvider(env.TESTNET_ENDPOINT_RPC);
    env.BLOCKSCAN = env.TESTNET_BLOCKSCAN;
  }
}
