interface SetNameContractUseCaseRequest {
  token_name: string;
  symbol: string;
  code: string;
}

export class SetNameContractUseCase {
  exec({ token_name, symbol, code }: SetNameContractUseCaseRequest) {
    let modified;

    modified = code.split('unicode"NAME_TOKEN"').join(`unicode"${token_name}"`);
    modified = code.split('unicode"TICKER_TOKEN"').join(`unicode"${symbol}"`);

    return modified;
  }
}
