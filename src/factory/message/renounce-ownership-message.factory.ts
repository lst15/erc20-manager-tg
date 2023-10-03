import { RenounceOwnershipMessageUseCase } from "../../usecases/message/renounce-ownership-message.usecase";

export function RenounceOwnershipMessageFactory() {
  return new RenounceOwnershipMessageUseCase();
}
