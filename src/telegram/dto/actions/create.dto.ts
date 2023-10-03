import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";

const requiredKeys = ["name", "symbol", "supply", "eth"];

export function CreateDto(props: any) {
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

  return keyValuePairs as CreateRequestModel;
}
