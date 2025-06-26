class Person {
  //properties
  //   name = "hhz";
  //   age = 18;

  static knowledge = ["html", "css", "js"];

  // private property
  #money = 0;

  //methods

  constructor(inputName, inputAge, inputGender, inputMoney) {
    // console.log("I'm constructor");
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.#money = inputMoney;
  }

  eat() {
    return `${this.name} can eat food`;
  }

  sleep() {
    return `${this.name} can sleep anywhere`;
  }

  static run() {
    return `person can run`;
  }
}

export default Person;
