import { BurnRequestModel } from "../../../model/telegram/actions/burn-request.model";
import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";

const requiredKeys = ["mainnet", "testnet"];

export function AmbientDto(props: any) {
  const args = props.match[1];

  if (requiredKeys.includes(args)) {
    return args;
  }

  return new Error("invalid key");
}
