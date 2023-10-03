import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";
import { RemoveLimitsRequestModel } from "../../../model/telegram/actions/remove-limits-request.model";

const requiredKeys = ["address"];

export function RmlimitsDto(props: any) {
  const args = props.match[1];
  const regex = /-(\w+)\s+([\w.]+)/g;

  const matches = [...args.matchAll(regex)];
  const keyValuePairs: any = {};

  for (const match of matches) {
    const key = match[1];
    const value = match[2];
    keyValuePairs[key] = value;
  }

  for (var indexKey in requiredKeys) {
    const key = requiredKeys[indexKey];
    if (key in keyValuePairs == false) {
      return new Error("invalid key");
    }
  }

  return keyValuePairs as RemoveLimitsRequestModel;
}
