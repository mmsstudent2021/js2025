import Person from "./Person";

class Student extends Person {
  constructor(name, age, gender, money, major) {
    super(name, age, gender, money);
    this.major = major;
  }

  teach() {
    console.log("teach method");
    return `${this.name} can teach web development`;
  }

  learn() {
    return `${this.name} can learn everything`;
  }
}

export default Student;
