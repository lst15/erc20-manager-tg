import { OpentradeMessageFactory } from "../../../factory/message/opentrade-message.factory";

export function OpentradeMessageController(
  open_hash: string,
  token_address: string
) {
  const factory = OpentradeMessageFactory();
  return factory.exec({
    token_address,
    open_hash,
  });
}
