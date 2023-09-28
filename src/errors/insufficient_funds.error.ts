export class InsufficientFunds extends Error {
  constructor() {
    super();
    this.message = "You have enough money";
  }
}
