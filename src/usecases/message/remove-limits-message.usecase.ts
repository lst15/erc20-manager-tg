import { env } from "../../env-schema";

interface RemoveLimitsMessageUsecaseRequest {
  token_address: string;
  remove_limits_hash: string;
}

export class RemoveLimitsMessageUseCase {
  exec({
    token_address,
    remove_limits_hash,
  }: RemoveLimitsMessageUsecaseRequest) {
    let message = "`" + token_address + "`\n\n";
    message += `Removed: ${env.BLOCKSCAN}tx/${remove_limits_hash}\n`;
    return message;
  }
}
