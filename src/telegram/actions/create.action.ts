import telebot from "telebot";
import { SetNameContactController } from "../controller/manager/set-name-contract.controller";
import { GenByteContractController } from "../controller/functions/gen-byte-contract.controller";
import { DeployContractController } from "../controller/functions/deploy-contract.controller";
import { Erc20code } from "../../contracts/erc20/erc20-code-contract";
import { env } from "../../env-schema";
import { ethersProvider } from "../../lib/ethers-provider";
import { Erc20Abi } from "../../contracts/erc20/erc20-abi-contract";
import { TransferTokensContractController } from "../controller/contract/transfer-tokens-contract.controller";
import { TransferEthController } from "../controller/functions/transfer-eth.controller";
import { OpenTradeContractController } from "../controller/contract/open-trade-contract.controller";
import { CreateRequestModel } from "../../model/telegram/actions/create-request.model";
import { CreateMessageController } from "../controller/view/message/create-message.controller";
import { RewriteFile } from "../../utils/rewrite-file";

export async function CreateAction({
  eth,
  name,
  supply,
  symbol,
}: CreateRequestModel) {
  const token_code = SetNameContactController(name, symbol, Erc20code);
  RewriteFile(token_code, "token_code.txt");
  const bytecode = await GenByteContractController("Elon.sol", token_code);
  const contract = await DeployContractController(
    env.PRIVATE_KEY,
    ethersProvider,
    Erc20Abi,
    bytecode
  );

  await new Promise((r) => setTimeout(r, 36000));
  const contract_address = contract.target.toString();

  const transferTokens = await TransferTokensContractController(
    ethersProvider,
    contract_address,
    Erc20Abi,
    supply,
    env.PRIVATE_KEY
  );

  const transferEth = await TransferEthController(
    ethersProvider,
    contract_address,
    eth,
    env.PRIVATE_KEY
  );

  await new Promise((r) => setTimeout(r, 24000));
  // const opened = await OpenTradeContractController(
  //   Erc20Abi,
  //   contract_address,
  //   env.PRIVATE_KEY,
  //   ethersProvider
  // );

  const build_message = CreateMessageController(
    transferEth.hash,
    transferTokens.hash,
    symbol,
    contract_address,
    name
  );

  return { message: build_message, code_path: "token_code.txt" } as {
    message: string;
    code_path: string;
  };
}
