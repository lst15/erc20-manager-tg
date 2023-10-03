import { ethers } from "ethers";
import { env } from "../env-schema";

export let ethersProvider = new ethers.JsonRpcProvider(
  env.TESTNET_ENDPOINT_RPC
);

export function setProvider(endpoint: string) {
  ethersProvider = new ethers.JsonRpcProvider(endpoint);
}
