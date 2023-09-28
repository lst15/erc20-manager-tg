import { GenByteContractFactory } from "../factory/gen-byte-contract.factory";

export function GenByteContractController(contract_name: string, code: string) {
  const factory = GenByteContractFactory();
  return factory.exec({ contract_name, code });
}
