interface LoggerMessageUseCaseRequest {
  messageReceived: string;
  reference: string;
}

export class LoggerMessageUseCase {
  exec({ reference, messageReceived }: LoggerMessageUseCaseRequest) {
    const message = `[${reference}]`;
  }
}
