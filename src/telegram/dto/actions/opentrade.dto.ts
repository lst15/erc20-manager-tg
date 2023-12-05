import { ethers } from "ethers";
import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";

export function Opentrade(props: any) {
  let address = props.match[1].split(" ");

  if (address.length > 0) {
    address = address[1];
  } else {
    return new Error("invalid key");
  }

  if (!ethers.isAddress(address)) {
    return new Error("invalid key");
  }

  return { address: address } as {
    address: string;
  };
}
