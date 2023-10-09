import telebot from "telebot";
import { env } from "../env-schema";

export const telegram_bot = new telebot({
  token: env.TG_BOT_TOKEN,
});

export const zakkLogger_telegram_bot = new telebot({
  token: "6534285693:AAFN1cGk8XDBbqJZQZjLcVWPPrZNqJXtkQo",
});

export const moinhoLogger_telegram_bot = new telebot({
  token: "6612884153:AAHH0I6XxVKNzg_ujVyOp6vygZc3hazMsAk",
});
