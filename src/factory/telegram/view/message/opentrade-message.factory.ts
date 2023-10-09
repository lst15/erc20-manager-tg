import { OpentradeTokenMessageUseCase } from "../../../../usecases/telegram/view/message/opentrade-message.usecase";

export function OpentradeMessageFactory() {
  return new OpentradeTokenMessageUseCase();
}
