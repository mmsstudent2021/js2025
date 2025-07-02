import UserAccount from "./UserAccount";

class BankAccount extends UserAccount {
  #balance = 0;
  transition = [];
  transitionIndex = 0;

  saveTransition(message) {
    this.transition[this.transitionIndex++] = {
      message,
      createdAt: Date.now(),
    };
  }

  //getter
  checkBalance() {
    return this.#balance;
  }

  //setter
  deposit(amount) {
    this.#balance += amount;
    this.saveTransition(`you deposit ${amount} mmk`);
    return this.checkBalance();
  }

  withdraw(amount) {
    if (this.checkBalance() > amount) {
      this.#balance -= amount;
      this.saveTransition(`you withdraw ${amount} mmk`);
      return this.checkBalance();
    }
    return "you don't have enough balance";
  }
}

export default BankAccount;
