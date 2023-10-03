export function PvkeyDto(props: any) {
  const args = props.match[1];

  if (!args) {
    return new Error("invalid key");
  }

  return args;
}
