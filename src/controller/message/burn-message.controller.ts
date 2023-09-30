import { BurnMessageFactory } from "../../factory/message/burn-message.factory";

export function BurnMessageController(
  burn_hash: string,
  symbol: string,
  token_address: string,
  token_name: string
) {
  const factory = BurnMessageFactory();
  return factory.exec({
    symbol,
    token_address,
    token_name,
    burn_hash,
  });
}
