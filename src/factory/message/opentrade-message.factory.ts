import { OpentradeTokenMessageUseCase } from "../../usecases/message/opentrade-message.usecase";

export function OpentradeMessageFactory() {
  return new OpentradeTokenMessageUseCase();
}
