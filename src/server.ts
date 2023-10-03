import { telegram_bot } from "./lib/telegram";
import { CreateRequestModel } from "./model/telegram/actions/create-request.model";
import { CreateAction } from "./telegram/actions/create.action";
import { OpentradeAction } from "./telegram/actions/opentrade.action";
import { CreateDto } from "./telegram/dto/actions/create.dto";
import { Opentrade } from "./telegram/dto/actions/opentrade.dto";

telegram_bot.on(/^\/create (.+)$/, async (msg, props) => {
  const params = CreateDto(props);

  if (params instanceof Error) {
    return await telegram_bot.sendMessage(
      msg.from.id,
      "Invalid params" as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );
  }

  const initMessage = await telegram_bot.sendMessage(
    msg.from.id,
    "Creating token ..." as any,
    {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    }
  );

  const message = await CreateAction({
    eth: params.eth,
    name: params.name,
    symbol: params.symbol,
    supply: params.supply,
  });

  telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

  return await telegram_bot.sendMessage(msg.from.id, message as any, {
    replyToMessage: msg.message_id,
    parseMode: "markdown",
  });
});

telegram_bot.on(/^\/opentrade (.+)$/, async (msg, props) => {
  const params = Opentrade(props);

  if (params instanceof Error) {
    return await telegram_bot.sendMessage(
      msg.from.id,
      "Invalid params" as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );
  }

  const initMessage = await telegram_bot.sendMessage(
    msg.from.id,
    "Opening ..." as any,
    {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    }
  );

  const opened = await OpentradeAction({
    address: params.address,
  });

  telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

  return await telegram_bot.sendMessage(msg.from.id, message as any, {
    replyToMessage: msg.message_id,
    parseMode: "markdown",
  });
});

telegram_bot.start();
// import {
//   burnTokens,
//   deployToken,
//   ethTransfer,
//   openTrading,
//   removeLimits,
//   renounceOwnership,
//   tokenTransfer,
// } from "./app";
// import { BurnMessageController } from "./telegram/controller/message/burn-message.controller";
// import { CreateMessageController } from "./telegram/controller/message/create-message.controller";
// import { RemoveLimitsMessageController } from "./telegram/controller/message/remove-limits-message.controller";
// import { RenounceOwnershipMessageController } from "./telegram/controller/message/renounce-ownership-message.controller";
// import { env } from "./env-schema";
// import { telegram_bot } from "./lib/telegram";
// import * as envfile from "envfile";
// import { readFile, writeFileSync } from "fs";
// import { resolve } from "path";
// import { setProvider } from "./lib/ethers-provider";

// telegram_bot.on(/^\/renounce (.+)$/, async (msg, props) => {
//   const token_address = props.match[1];

//   const initMessage = await telegram_bot.sendMessage(
//     msg.from.id,
//     "Renoucing Ownership ..." as any,
//     {
//       replyToMessage: msg.message_id,
//       parseMode: "markdown",
//     }
//   );

//   const renounce = await renounceOwnership(token_address);
//   const build_message = RenounceOwnershipMessageController(
//     renounce.hash,
//     token_address
//   );

//   telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

//   return await telegram_bot.sendMessage(msg.from.id, build_message as any, {
//     replyToMessage: msg.message_id,
//     parseMode: "markdown",
//   });
// });

// telegram_bot.on(/^\/rmlimits (.+)$/, async (msg, props) => {
//   const token_address = props.match[1];

//   const initMessage = await telegram_bot.sendMessage(
//     msg.from.id,
//     "Removing limits ..." as any,
//     {
//       replyToMessage: msg.message_id,
//       parseMode: "markdown",
//     }
//   );

//   const rmlimits = await removeLimits(token_address);
//   const build_message = RemoveLimitsMessageController(
//     rmlimits.hash,
//     token_address
//   );

//   telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

//   return await telegram_bot.sendMessage(msg.from.id, build_message as any, {
//     replyToMessage: msg.message_id,
//     parseMode: "markdown",
//   });
// });

// telegram_bot.on(/^\/burn (.+)$/, async (msg, props) => {
//   const [token_address, value] = props.match[1].split(" ");

//   const initMessage = await telegram_bot.sendMessage(
//     msg.from.id,
//     "Burning tokens ..." as any,
//     {
//       replyToMessage: msg.message_id,
//       parseMode: "markdown",
//     }
//   );

//   const burnedTokens = await burnTokens(token_address, value);

//   telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

//   const build_message = BurnMessageController(burnedTokens.hash, token_address);

//   return await telegram_bot.sendMessage(msg.from.id, build_message as any, {
//     replyToMessage: msg.message_id,
//     parseMode: "markdown",
//   });
// });

// telegram_bot.on(/^\/create (.+)$/, async (msg, props) => {
//   const args = props.match[1];

//   const regex = /-(\w+)\s+([\w.]+)/g;
//   const matches = [...args.matchAll(regex)];

//   const keyValuePairs: any = {};

//   for (const match of matches) {
//     const key = match[1];
//     const value = match[2];
//     keyValuePairs[key] = value;
//   }

//   const initMessage = await telegram_bot.sendMessage(
//     msg.from.id,
//     "Creating token ..." as any,
//     {
//       replyToMessage: msg.message_id,
//       parseMode: "markdown",
//     }
//   );

//   const contract = await deployToken(keyValuePairs.name, keyValuePairs.symbol);
//   await new Promise((r) => setTimeout(r, 36000));

//   telegram_bot.editMessageText(
//     {
//       chatId: initMessage.chat.id,
//       messageId: initMessage.message_id,
//     },
//     "Transfering supply tokens ..."
//   );

//   const supplyTransfered = await tokenTransfer(
//     contract.target.toString(),
//     keyValuePairs.supply
//   );

//   telegram_bot.editMessageText(
//     {
//       chatId: initMessage.chat.id,
//       messageId: initMessage.message_id,
//     },
//     "Transfering ethers ..."
//   );

//   const ethTransfered = await ethTransfer(
//     contract.target.toString(),
//     keyValuePairs.eth
//   );

//   telegram_bot.editMessageText(
//     {
//       chatId: initMessage.chat.id,
//       messageId: initMessage.message_id,
//     },
//     "Opening trading ..."
//   );
//   await new Promise((r) => setTimeout(r, 36000));
//   const openedTrading = await openTrading(contract.target.toString());

//   const build_message = CreateMessageController(
//     ethTransfered.hash,
//     openedTrading.hash,
//     supplyTransfered.hash,
//     keyValuePairs.symbol,
//     contract.target.toString(),
//     keyValuePairs.name
//   );

//   telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

//   return await telegram_bot.sendMessage(msg.from.id, build_message as any, {
//     replyToMessage: msg.message_id,
//     parseMode: "markdown",
//   });
// });

// export const writeEnvToFile = (
//   envVariables: { key: string; value: any }[]
// ): void => {
//   // get `.env` from path of current directory
//   const path = resolve(__dirname, "../.env");
//   readFile(path, "utf8", (err: any, data: any) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     const parsedFile = envfile.parse(data);
//     envVariables.forEach((envVar: { key: string; value: any }) => {
//       if (envVar.key && envVar.value) {
//         parsedFile[envVar.key] = envVar.value;
//       }
//     });
//     writeFileSync(path, envfile.stringify(parsedFile));

//     // NB: You should now be able to see your .env with the new values,
//     // also note that any comments or newlines will be stripped from
//     // your .env after the writeFileSync, but all your pre-existing
//     // vars should still appear the .env.
//   });
// };

// telegram_bot.on(/^\/sw (.+)$/, async (msg, props) => {
//   const private_key = props.match[1];

//   writeEnvToFile([
//     {
//       key: "PRIVATE_KEY",
//       value: private_key.toLowerCase(),
//     },
//   ]);
//   env.PRIVATE_KEY = private_key;

//   return await telegram_bot.sendMessage(
//     msg.from.id,
//     "Wallet key was updated with success " as any,
//     { replyToMessage: msg.message_id }
//   );
// });

// telegram_bot.on(/^\/ambient (.+)$/, async (msg, props) => {
//   const ambient = props.match[1];

//   if (ambient == "mainnet") {
//     setProvider(
//       "https://mainnet.infura.io/v3/6a168940ef48465d9b5894c30d5d9ab7"
//     );

//     writeEnvToFile([
//       {
//         key: "BLOCKSCAN",
//         value: "https://etherscan.io/",
//       },
//     ]);
//   } else if (ambient == "testnet") {
//     setProvider("https://rpc.notadegen.com/eth/goerli");

//     writeEnvToFile([
//       {
//         key: "BLOCKSCAN",
//         value: "https://goerli.etherscan.io/",
//       },
//     ]);
//   } else {
//     return await telegram_bot.sendMessage(
//       msg.from.id,
//       "Environment not found(use mainnet or testnet)" as any,
//       { replyToMessage: msg.message_id }
//     );
//   }

//   return await telegram_bot.sendMessage(
//     msg.from.id,
//     `Environment was updated to ${ambient} with success` as any,
//     { replyToMessage: msg.message_id }
//   );
// });

// telegram_bot.start();
