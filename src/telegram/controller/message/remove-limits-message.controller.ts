import { RemoveLimitsMessageFactory } from "../../../factory/message/remove-limits-message.factory";

export function RemoveLimitsMessageController(
  remove_limits_hash: string,
  token_address: string
) {
  const factory = RemoveLimitsMessageFactory();
  return factory.exec({
    token_address,
    remove_limits_hash,
  });
}
