import telebot from "telebot";
import { RenounceAction } from "../actions/renounce.action";
import { RenounceDto } from "../dto/actions/renounce.dto";
import { RenounceOwnershipMessageController } from "../controller/message/renounce-ownership-message.controller";

export function RenounceListener(telegram_bot: telebot) {
  telegram_bot.on(/^\/renounce (.+)$/, async (msg, props) => {
    const params = RenounceDto(props);

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
      "Renoucing ..." as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );

    const opened = await RenounceAction({
      address: params.address,
    });

    const message = RenounceOwnershipMessageController(
      opened.hash,
      params.address
    );

    telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

    return await telegram_bot.sendMessage(msg.from.id, message as any, {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    });
  });
}
