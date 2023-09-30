import { CreateTokenMessageUseCase } from "../usecases/message/create-message.usecase";

export function CreateMessageFactory() {
  return new CreateTokenMessageUseCase();
}
