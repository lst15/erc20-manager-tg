import { CompilerRepository } from "../repositories/compiler.repository";

interface GenByteContractUseCaseRequest {
  contract_name: string;
  code: string;
}

export class GenByteContractUseCase {
  constructor(private compilerRepository: CompilerRepository) {}

  async exec({ contract_name, code }: GenByteContractUseCaseRequest) {
    const compiled = JSON.parse(
      await this.compilerRepository.compile(contract_name, code)
    );
    const bytecode = compiled.contracts["Elon.sol"]["Elon"].evm.bytecode.object;
    return bytecode;
  }
}
