import { ethers } from "ethers";
import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";

export function Opentrade(props: any) {
  const address = props.match[1];

  if (!ethers.isAddress(address)) {
    return new Error("invalid key");
  }

  return { address: address } as {
    address: string;
  };
}
