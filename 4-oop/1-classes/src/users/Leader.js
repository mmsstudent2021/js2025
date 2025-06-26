import Student from "./Student";

class Leader extends Student {
  constructor(name, age, gender, money, major, section) {
    super(name, age, gender, money, major);
    this.section = section;
  }

  leading() {
    return `${this.name} can lead the ${this.section} section`;
  }
}

export default Leader;
