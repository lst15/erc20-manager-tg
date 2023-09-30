import "dotenv/config";

type envSchema = {
  ENDPOINT_RPC: string;
  PRIVATE_KEY: string;
  TG_BOT_TOKEN: string;
};

export const env = process.env as envSchema;
