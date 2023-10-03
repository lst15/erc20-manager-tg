import { RemoveLimitsMessageUseCase } from "../../usecases/message/remove-limits-message.usecase";

export function RemoveLimitsMessageFactory() {
  return new RemoveLimitsMessageUseCase();
}
