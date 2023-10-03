import telebot from "telebot";
import { PvkeyDto } from "../dto/actions/pvkey.dto";
import { PvkeyAction } from "../actions/pvkey.action";

export function PvkeyListener(telegram_bot: telebot) {
  telegram_bot.on(/^\/pvkey (.+)$/, async (msg, props) => {
    const private_key = PvkeyDto(props);

    PvkeyAction({ private_key });

    return await telegram_bot.sendMessage(
      msg.from.id,
      `Private key was updated` as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );
  });
}
