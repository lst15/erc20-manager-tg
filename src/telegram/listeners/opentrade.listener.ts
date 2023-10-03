import telebot from "telebot";
import { OpentradeAction } from "../actions/opentrade.action";
import { OpentradeMessageController } from "../controller/message/opentrade-message.controller";
import { Opentrade } from "../dto/actions/opentrade.dto";

export function OpentradeListener(telegram_bot: telebot) {
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

    const message = OpentradeMessageController(opened.hash, params.address);

    telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

    return await telegram_bot.sendMessage(msg.from.id, message as any, {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    });
  });
}
