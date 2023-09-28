import { ethers } from "ethers";
import { env } from "../env-schema";

export const ethersProvider = new ethers.JsonRpcProvider(env.ENDPOINT_RPC);
