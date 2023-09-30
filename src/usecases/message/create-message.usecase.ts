import { env } from "../../env-schema";

interface CreateTokenMessageUsecaseRequest {
  token_name: string;
  symbol: string;
  token_address: string;
  deploy_hash: string;
  supply_hash: string;
  eth_hash: string;
  open_trade_hash: string;
}

export class CreateTokenMessageUseCase {
  exec({
    token_name,
    symbol,
    token_address,
    deploy_hash,
    supply_hash,
    eth_hash,
    open_trade_hash,
  }: CreateTokenMessageUsecaseRequest) {
    let message = `${token_name} (${symbol})\n`;
    message += "`" + token_address + "`\n\n";
    message += `Deploy: ${env.BLOCKSCAN}${deploy_hash}\n\n`;
    message += `Supply Sent: ${env.BLOCKSCAN}${supply_hash}\n\n`;
    message += `ETH Sent: ${env.BLOCKSCAN}${eth_hash}\n\n`;
    message += `Open Trade: ${env.BLOCKSCAN}${open_trade_hash}\n\n`;
    return;
  }
}
