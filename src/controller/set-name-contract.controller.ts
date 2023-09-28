import { SetNameContractFactory } from "../factory/set-name-contract.factory";

export function SetNameContactController(
  token_name: string,
  symbol: string,
  code: string
) {
  const factory = SetNameContractFactory();
  return factory.exec({ token_name, symbol, code });
}
