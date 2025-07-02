class Calculator {
  constructor(value) {
    this.value = value;
  }
  add(amount) {
    this.value += amount;
    return this;
  }

  subtract(amount) {
    this.value -= amount;
    return this;
  }

  multiply(amount) {
    this.value *= amount;
    return this;
  }

  division(amount) {
    this.value /= amount;
    return this;
  }

  get() {
    return this.value;
  }
}

export default Calculator;
