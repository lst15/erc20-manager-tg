import { SolcCompilerRepository } from "../repositories/implementations/solc-compiler.repository";
import { GenByteContractUseCase } from "../usecases/gen-byte-contract.usecase";

export function GenByteContractFactory() {
  const compilerRepository = new SolcCompilerRepository();
  return new GenByteContractUseCase(compilerRepository);
}
