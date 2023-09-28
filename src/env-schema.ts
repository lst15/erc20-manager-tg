import "dotenv/config";

type envSchema = {
  ENDPOINT_RPC: string;
  PRIVATE_KEY: string;
};

export const env = process.env as envSchema;
