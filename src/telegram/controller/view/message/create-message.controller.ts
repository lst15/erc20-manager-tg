import { CreateMessageFactory } from "../../../../factory/telegram/view/message/create-message.factory";

export function CreateMessageController(
  eth_hash: string,
  supply_hash: string,
  symbol: string,
  token_address: string,
  token_name: string
) {
  const factory = CreateMessageFactory();
  return factory.exec({
    eth_hash,
    supply_hash,
    symbol,
    token_address,
    token_name,
  });
}
