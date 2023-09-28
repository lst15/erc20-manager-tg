import { SetNameContractUseCase } from "../usecases/set-name-contract.usecase";

export function SetNameContractFactory() {
  return new SetNameContractUseCase();
}
