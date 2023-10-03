import { BurnMessageFactory } from "../../../factory/message/burn-message.factory";

export function BurnMessageController(
  burn_hash: string,
  token_address: string
) {
  const factory = BurnMessageFactory();
  return factory.exec({
    token_address,
    burn_hash,
  });
}
