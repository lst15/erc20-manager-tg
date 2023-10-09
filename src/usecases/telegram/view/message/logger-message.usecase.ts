interface LoggerMessageUseCaseRequest {
  message: string;
}

export class LoggerMessageUseCase {
  exec({ message }: LoggerMessageUseCaseRequest) {}
}
