import {
  burnTokens,
  deployToken,
  ethTransfer,
  openTrading,
  removeLimits,
  tokenTransfer,
} from "./app";
import { telegram_bot } from "./lib/telegram";

telegram_bot.on(/^\/rmlimits (.+)$/, async (msg, props) => {
  const token_address = props.match[1];

  const initMessage = await telegram_bot.sendMessage(
    msg.from.id,
    "Removendo limites" as any,
    {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    }
  );

  const rmlimits = await removeLimits(token_address);
  console.log(rmlimits.hash);

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Concluido"
  );
});

telegram_bot.on(/^\/burn (.+)$/, async (msg, props) => {
  const [token_address, value] = props.match[1].split(" ");

  const initMessage = await telegram_bot.sendMessage(
    msg.from.id,
    "Queimando tokens" as any,
    {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    }
  );

  await burnTokens(token_address, value);

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Concluido"
  );
});

telegram_bot.on(/^\/create (.+)$/, async (msg, props) => {
  const args = props.match[1];

  const regex = /--(\w+)\s+([\w.]+)/g;
  const matches = [...args.matchAll(regex)];

  const keyValuePairs: any = {};

  for (const match of matches) {
    const key = match[1];
    const value = match[2];
    keyValuePairs[key] = value;
  }

  const initMessage = await telegram_bot.sendMessage(
    msg.from.id,
    "Criando token" as any,
    {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    }
  );

  const contract = await deployToken(keyValuePairs.name, keyValuePairs.symbol);

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Propagando contrato(2 blocos)"
  );
  await new Promise((r) => setTimeout(r, 6000));

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Transferindo tokens para contrato"
  );

  await tokenTransfer(contract.target.toString(), keyValuePairs.supply);

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Transferindo ethers para contrato"
  );

  await ethTransfer(contract.target.toString(), keyValuePairs.eth);

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Abrindo trade do contrato"
  );

  await openTrading(contract.target.toString());

  telegram_bot.editMessageText(
    {
      chatId: initMessage.chat.id,
      messageId: initMessage.message_id,
    },
    "Concluido"
  );
});

telegram_bot.start();
