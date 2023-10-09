import { CreateTokenMessageUseCase } from "../../../../usecases/telegram/view/message/create-token-message.usecase";

export function CreateMessageFactory() {
  return new CreateTokenMessageUseCase();
}
