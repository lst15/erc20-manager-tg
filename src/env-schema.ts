import "dotenv/config";

type envSchema = {
  PRIVATE_KEY: string;
  TG_BOT_TOKEN: string;
  TESTNET_ENDPOINT_RPC: string;
  TESTNET_BLOCKSCAN: string;
  MAINNET_ENDPOINT_RPC: string;
  MAINNET_BLOCKSCAN: string;
  BLOCKSCAN: string;
};

export const env = process.env as envSchema;
