import telebot from "telebot";
import { env } from "./env-schema";
import { CreateListener } from "./telegram/listeners/create.listener";
import { OpentradeListener } from "./telegram/listeners/opentrade.listener";
import { RmlimitsListener } from "./telegram/listeners/rmlimits.listener";
import { BurnListener } from "./telegram/listeners/burn.listener";
import { RenounceListener } from "./telegram/listeners/renounce.listener";
import { AmbientListener } from "./telegram/listeners/ambient.listener";

export const telegram_bot = new telebot({
  token: env.TG_BOT_TOKEN,
});

CreateListener(telegram_bot);
OpentradeListener(telegram_bot);
RmlimitsListener(telegram_bot);
BurnListener(telegram_bot);
RenounceListener(telegram_bot);
AmbientListener(telegram_bot);

telegram_bot.start();
