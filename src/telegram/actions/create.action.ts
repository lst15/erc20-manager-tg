import telebot from "telebot";
import { SetNameContactController } from "../controller/manager/set-name-contract.controller";
import { GenByteContractController } from "../controller/functions/gen-byte-contract.controller";
import { DeployContractController } from "../controller/functions/deploy-contract.controller";
import { code } from "../../contract/code-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { abi } from "../../contract/abi-contract";
import { TransferTokensContractController } from "../controller/contract/transfer-tokens-contract.controller";
import { TransferEthController } from "../controller/functions/transfer-eth.controller";
import { OpenTradeContractController } from "../controller/contract/open-trade-contract.controller";
import { CreateRequestModel } from "../../model/telegram/actions/create-request.model";
import { CreateMessageController } from "../controller/message/create-message.controller";

export async function CreateAction({
  eth,
  name,
  supply,
  symbol,
}: CreateRequestModel) {
  const token_code = SetNameContactController(name, symbol, code);
  const bytecode = await GenByteContractController("Elon.sol", token_code);
  const contract = await DeployContractController(
    env.PRIVATE_KEY,
    ethersProvider,
    abi,
    bytecode
  );

  await new Promise((r) => setTimeout(r, 24000));
  const contract_address = contract.target.toString();

  const transferTokens = await TransferTokensContractController(
    ethersProvider,
    contract_address,
    abi,
    supply,
    env.PRIVATE_KEY
  );

  const transferEth = await TransferEthController(
    ethersProvider,
    contract_address,
    eth,
    env.PRIVATE_KEY
  );

  const build_message = CreateMessageController(
    transferEth.hash,
    transferTokens.hash,
    symbol,
    contract_address,
    name
  );

  return build_message;
}
