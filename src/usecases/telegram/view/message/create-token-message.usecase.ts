import { env } from "../../../../env-schema";

interface CreateTokenMessageUsecaseRequest {
  token_name: string;
  symbol: string;
  token_address: string;
  supply_hash: string;
  eth_hash: string;
}

export class CreateTokenMessageUseCase {
  exec({
    token_name,
    symbol,
    token_address,
    supply_hash,
    eth_hash,
  }: CreateTokenMessageUsecaseRequest) {
    let message = `${token_name} (${symbol})\n`;
    message += "`" + token_address + "`\n\n";
    message += `Supply Sent: ${env.BLOCKSCAN}tx/${supply_hash}\n\n`;
    message += `ETH Sent: ${env.BLOCKSCAN}tx/${eth_hash}\n\n`;
    return message;
  }
}
