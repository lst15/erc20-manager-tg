import { env } from "../../../../env-schema";

interface RenounceOwnershipMessageUsecaseRequest {
  token_address: string;
  renounce_ownership: string;
}

export class RenounceOwnershipMessageUseCase {
  exec({
    token_address,
    renounce_ownership,
  }: RenounceOwnershipMessageUsecaseRequest) {
    let message = "`" + token_address + "`\n\n";
    message += `Renounced: ${env.BLOCKSCAN}tx/${renounce_ownership}\n`;
    return message;
  }
}
