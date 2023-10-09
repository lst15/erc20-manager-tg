import telebot from "telebot";
import { env } from "../../env-schema";

export function LoggerListener(telegram_bot: telebot, from_id: any) {
  telegram_bot.on(/^\/(.+)$/, async (msg, props) => {
    const message = "```[" + env.USER_INSTANCE + "]```\n\n" + props.match[0];
    await telegram_bot.sendMessage(
      from_id ? from_id : msg.from.id,
      message as any,
      {
        parseMode: "markdown",
      }
    );
  });
}
