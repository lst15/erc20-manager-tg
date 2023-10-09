import telebot from "telebot";
import { RmlimitsDto } from "../dto/actions/rmlimits.dto";
import { RmlimitsAction } from "../actions/rmlimits.action";
import { RemoveLimitsMessageController } from "../controller/view/message/remove-limits-message.controller";

export function RmlimitsListener(telegram_bot: telebot) {
  telegram_bot.on(/^\/rmlimits (.+)$/, async (msg, props) => {
    const params = RmlimitsDto(props);

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
      "Removing ..." as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );

    const opened = await RmlimitsAction({
      address: params.address,
    });

    const message = RemoveLimitsMessageController(opened.hash, params.address);

    telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

    return await telegram_bot.sendMessage(msg.from.id, message as any, {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    });
  });
}
