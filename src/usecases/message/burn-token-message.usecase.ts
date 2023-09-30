import { env } from "../../env-schema";

interface BurnTokenMessageUsecaseRequest {
  token_name: string;
  symbol: string;
  token_address: string;
  burn_hash: string;
}

export class BurnTokenMessageUseCase {
  exec({
    token_name,
    symbol,
    token_address,
    burn_hash,
  }: BurnTokenMessageUsecaseRequest) {
    let message = `${token_name} (${symbol})\n`;
    message += "`" + token_address + "`\n\n";
    message += `Burned: ${env.BLOCKSCAN}tx/${burn_hash}\n`;
    return message;
  }
}
