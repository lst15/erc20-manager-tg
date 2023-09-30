import { CreateMessageFactory } from "../factory/create-message.factory";

export function CreateMessageController(
  deploy_hash: string,
  eth_hash: string,
  open_trade_hash: string,
  supply_hash: string,
  symbol: string,
  token_address: string,
  token_name: string
) {
  const factory = CreateMessageFactory();
  return factory.exec({
    deploy_hash,
    eth_hash,
    open_trade_hash,
    supply_hash,
    symbol,
    token_address,
    token_name,
  });
}
