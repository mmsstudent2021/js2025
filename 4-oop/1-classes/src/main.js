import BankAccount from "./accounts/BankAccount";
import UserAccount from "./accounts/UserAccount";
import Calculator from "./maths/Calculator";
import Leader from "./users/Leader";
import Person from "./users/Person";
import Student from "./users/Student";

// const person = {
//   name: "hhz",
//   age: 18,
// };

// console.log(person);
// console.log(Person);
// console.log(Person.name);
// console.log(Person.knowledge);

// console.log(Person.run());
// console.log(Person.age);

// const p1 = new Person("hein htet zan", 18, "male", 5000); // instantiate - to get obj
// console.log(p1);
// console.log(p1.name);
// console.log(p1.age);
// console.log(p1.#money);
// console.log(p1.teach());

// const p2 = new Person("Su Su", 17, "female");
// console.log(p2);

// const p3 = new Person("Aung Aung", 30, "male");
// console.log(p3);

// const s1 = new Student("Aye Aye", 17, "female", 15000, "SWD");

// console.log(s1);

// const l1 = new Leader("Mg Mg", 18, "male", 50000, "SWD", "weekday");

// console.log(l1);

// const l2 = new Leader("Zaw Zaw", 18, "male", 30000, "SWD", "weekend");

// console.log(l2);

// const a = new Audio();

// console.dir(a);

// const myAcc = new UserAccount("hhz", "hhz@gmail.com", "asdffdsa");
// console.log(myAcc);

// console.log(myAcc.userName);
// console.log(myAcc.email);
// console.log(myAcc.login("aa@gmail.com","hello"));
// console.log(myAcc.login("hhz@gmail.com","asdffdsa"));
// console.log(myAcc.showPassword());//getter
// console.log(myAcc.changePassword("aaaa","bbbb"));//setter
// console.log(myAcc.changePassword("asdffdsa","bbbb"));//setter
// console.log(myAcc.login("hhz@gmail.com","asdffdsa"));
// console.log(myAcc.login("hhz@gmail.com","bbbb"));

// console.log(myAcc.#password);

// const myBankAcc = new BankAccount("hein htet zan", "hhz@gmail.com", "asdffdsa");
// console.log(myBankAcc);
// console.log(myBankAcc.login("hhz@gmail.com", "asdffdsa"));
// console.log(myBankAcc.checkBalance());
// console.log(myBankAcc.deposit(3000));
// console.log(myBankAcc.deposit(2000));
// console.log(myBankAcc.withdraw(1000));
// console.log(myBankAcc.withdraw(6000));
// console.log(myBankAcc.checkBalance());
// console.table(myBankAcc.transition);

const calc = new Calculator(100);

console.log(calc.get());
console.log(calc.add(50).subtract(20).multiply(2).get());
