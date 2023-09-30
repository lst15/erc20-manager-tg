import telebot from "telebot";
import { env } from "../env-schema";

export const telegram_bot = new telebot({
  token: env.TG_BOT_TOKEN,
});
