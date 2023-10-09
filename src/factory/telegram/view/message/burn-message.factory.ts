import { BurnTokenMessageUseCase } from "../../../../usecases/telegram/view/message/burn-token-message.usecase";

export function BurnMessageFactory() {
  return new BurnTokenMessageUseCase();
}
