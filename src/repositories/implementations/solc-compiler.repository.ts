import { solCompiler } from "../../lib/solc-compiler";
import { CompilerRepository } from "../compiler.repository";

export class SolcCompilerRepository implements CompilerRepository {
  async compile(contract_name: string, code: string) {
    const input: any = {
      language: "Solidity",
      sources: {
        //   contract_name: {
        //     content: code,
        //   },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    };

    while (solCompiler === undefined) {
      await new Promise((r) => setTimeout(r, 1000));
    }

    input.sources[contract_name] = { content: code };

    return solCompiler.compile(JSON.stringify(input));
  }
}
