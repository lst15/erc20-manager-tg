import { env } from "../../env-schema";

interface OpentradeTokenMessageUsecaseRequest {
  token_address: string;
  open_hash: string;
}

export class OpentradeTokenMessageUseCase {
  exec({ token_address, open_hash }: OpentradeTokenMessageUsecaseRequest) {
    let message = "`" + token_address + "`\n\n";
    message += `Open Trading: ${env.BLOCKSCAN}tx/${open_hash}\n`;
    return message;
  }
}
