import { SetNameContractUseCase } from "../../usecases/managers/set-name-contract.usecase";

export function SetNameContractFactory() {
  return new SetNameContractUseCase();
}
