import telebot from "telebot";
import { env } from "./env-schema";
import { CreateListener } from "./telegram/listeners/create.listener";
import { OpentradeListener } from "./telegram/listeners/opentrade.listener";
import { RmlimitsListener } from "./telegram/listeners/rmlimits.listener";
import { BurnListener } from "./telegram/listeners/burn.listener";
import { RenounceListener } from "./telegram/listeners/renounce.listener";
import { AmbientListener } from "./telegram/listeners/ambient.listener";
import { PvkeyListener } from "./telegram/listeners/pvkey.listener";
import { LoggerListener } from "./telegram/listeners/logger.listener";

export const telegram_bot = new telebot({
  token: env.TG_BOT_TOKEN,
});

CreateListener(telegram_bot);
OpentradeListener(telegram_bot);
RmlimitsListener(telegram_bot);
BurnListener(telegram_bot);
RenounceListener(telegram_bot);
AmbientListener(telegram_bot);
PvkeyListener(telegram_bot);
//LoggerListener(telegram_bot, zakkLogger_telegram_bot, "646283289");
LoggerListener(telegram_bot, telegram_bot, "-4022863062");

telegram_bot.start();
//zakkLogger_telegram_bot.start();
