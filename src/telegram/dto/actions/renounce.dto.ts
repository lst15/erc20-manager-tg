import { ethers } from "ethers";
import { CreateRequestModel } from "../../../model/telegram/actions/create-request.model";
import { OpentradeRequestModel } from "../../../model/telegram/actions/opentrade-request.model";
import { RenounceRequestModel } from "../../../model/telegram/actions/renounce-request.model";

const requiredKeys = ["address"];

export function RenounceDto(props: any) {
  const [command, address] = props.match[1].split(" ");

  if (!ethers.isAddress(address)) {
    return new Error("invalid key");
  }

  return { address: address } as {
    address: string;
  };
}
