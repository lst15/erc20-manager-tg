import { RenounceOwnershipMessageFactory } from "../../../../factory/telegram/view/message/renounce-ownership-message.factory";

export function RenounceOwnershipMessageController(
  renounce_ownership: string,
  token_address: string
) {
  const factory = RenounceOwnershipMessageFactory();
  return factory.exec({
    token_address,
    renounce_ownership,
  });
}
