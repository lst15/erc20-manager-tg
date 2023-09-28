export interface CompilerRepository {
  compile(contract_name: string, code: string): any;
}
