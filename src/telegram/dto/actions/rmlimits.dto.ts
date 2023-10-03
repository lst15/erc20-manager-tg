import { ethers } from "ethers";
import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";
import { RemoveLimitsRequestModel } from "../../../model/telegram/actions/remove-limits-request.model";

const requiredKeys = ["address"];

export function RmlimitsDto(props: any) {
  const address = props.match[1];

  if (!ethers.isAddress(address)) {
    return new Error("invalid key");
  }

  return { address: address } as {
    address: string;
  };
}
