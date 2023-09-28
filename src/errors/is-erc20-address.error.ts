export class IsErc20AddressError extends Error {
  constructor() {
    super();
    this.message = "Value is not a valid ERC20 address";
  }
}
