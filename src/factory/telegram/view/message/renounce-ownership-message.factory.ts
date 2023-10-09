import { RenounceOwnershipMessageUseCase } from "../../../../usecases/telegram/view/message/renounce-ownership-message.usecase";

export function RenounceOwnershipMessageFactory() {
  return new RenounceOwnershipMessageUseCase();
}
