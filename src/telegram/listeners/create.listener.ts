import telebot from "telebot";
import { CreateAction } from "../actions/create.action";
import { CreateDto } from "../dto/actions/create.dto";

export function CreateListener(telegram_bot: telebot) {
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
}
