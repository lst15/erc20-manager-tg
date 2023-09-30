import { CreateTokenMessageUseCase } from "../../usecases/message/create-token-message.usecase";

export function CreateMessageFactory() {
  return new CreateTokenMessageUseCase();
}
