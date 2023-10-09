import { RemoveLimitsMessageUseCase } from "../../../../usecases/telegram/view/message/remove-limits-message.usecase";

export function RemoveLimitsMessageFactory() {
  return new RemoveLimitsMessageUseCase();
}
