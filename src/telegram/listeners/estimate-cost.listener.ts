import telebot from "telebot";
import { EstimateCostAction } from "../actions/estimate.action";

export function EstimateCostListener(telegram_bot: telebot) {
  telegram_bot.on("/estimate", async (msg, props) => {
    const initMessage = await telegram_bot.sendMessage(
      msg.from.id,
      "Calculating cost ..." as any,
      {
        replyToMessage: msg.message_id,
        parseMode: "markdown",
      }
    );

    let message = await EstimateCostAction();
    let sendMessage = "Gas network:  `" + message[1] + "`\n";
    sendMessage += "Gas base:  `" + message[2] + "`\n";
    sendMessage += "Gas used:  `" + message[3] + "`\n\n";
    sendMessage += "Total expected cost:  `" + message[4] + "`\n";
    sendMessage += "Total real cost:  `" + message[0] + "`\n\n";
    sendMessage +=
      "Make sure you have more than `" +
      message[4] +
      "` in your wallet address\n\n";

    telegram_bot.deleteMessage(initMessage.chat.id, initMessage.message_id);

    await telegram_bot.sendMessage(msg.from.id, sendMessage as any, {
      replyToMessage: msg.message_id,
      parseMode: "markdown",
    });
  });
}
