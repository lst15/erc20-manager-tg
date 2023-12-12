import telebot from "telebot";
import { BurnAction } from "../actions/burn.action";
import { BurnMessageController } from "../controller/view/message/burn-message.controller";
import { BurnDto } from "../dto/actions/burn.dto";

export function BurnListener(telegram_bot: telebot) {
  telegram_bot.on(/^\/burn (.+)$/, async (msg, props) => {
    const params = BurnDto(props);

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
      "Burning ..." as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );
    console.log("aq", params.address);
    const opened = await BurnAction({
      address: params.address,
      value: params.value,
    });

    const message = BurnMessageController(opened.hash, params.address);

    telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

    return await telegram_bot.sendMessage(msg.from.id, message as any, {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    });
  });
}
