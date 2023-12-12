import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";
import { FactoryAbi } from "../../contracts/factory/factory-aby-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { BurnRequestModel } from "../../model/telegram/actions/burn-request.model";
import { RemoveLimitsRequestModel } from "../../model/telegram/actions/remove-limits-request.model";
import { BurnTokensContractController } from "../controller/contract/burn-tokens-contract.controller";
import { GetPairContractController } from "../controller/contract/get-pair-contract.controller";

export async function BurnAction({ address, value }: BurnRequestModel) {
  const pair = await GetPairContractController(
    env.WETH,
    address,
    env.FACTORY,
    env.PRIVATE_KEY,
    ethersProvider,
    FactoryAbi
  );
  console.log(pair);
  const opened = await BurnTokensContractController(
    Erc20Abi,
    env.PRIVATE_KEY,
    ethersProvider,
    value,
    pair
  );

  return opened;
}
