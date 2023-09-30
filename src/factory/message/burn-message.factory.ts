import { BurnTokenMessageUseCase } from "../../usecases/message/burn-token-message.usecase";

export function BurnMessageFactory() {
  return new BurnTokenMessageUseCase();
}
