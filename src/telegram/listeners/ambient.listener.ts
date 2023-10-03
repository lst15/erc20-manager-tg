import telebot from "telebot";
import { AmbientDto } from "../dto/actions/ambient.dto";
import { AmbientAction } from "../actions/ambient.action";

export function AmbientListener(telegram_bot: telebot) {
  telegram_bot.on(/^\/ambient (.+)$/, async (msg, props) => {
    const ambient = AmbientDto(props);

    if (ambient instanceof Error) {
      return await telegram_bot.sendMessage(
        msg.from.id,
        "Invalid params" as any,
        {
          replyToMessage: msg.message_id,
          parseMode: "markdown",
        }
      );
    }

    AmbientAction({ ambient });

    return await telegram_bot.sendMessage(
      msg.from.id,
      `Environment ${ambient} was defined` as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );
  });
}
