import { env } from "../../env-schema";
import { PvkeyRequestModel } from "../../model/telegram/actions/pvkey-request.model";
import { writeEnvToFile } from "../../utils/rewrite-env-field";

export function PvkeyAction({ private_key }: PvkeyRequestModel) {
  writeEnvToFile([
    {
      key: "PRIVATE_KEY",
      value: private_key,
    },
  ]);

  env.PRIVATE_KEY = private_key;
}
