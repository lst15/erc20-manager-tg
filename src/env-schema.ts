import "dotenv/config";

type envSchema = {
  ENDPOINT_BSC: string;
  PRIVATE_KEY: string;
};

export const env = process.env as envSchema;
