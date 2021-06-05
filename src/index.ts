import { person, printPerson } from "./anonymousInterface_01";
import Person02Impl from "./classAndInterface_03";
import Person01 from "./class_02";

//01 anonymous interface
console.log(person);
printPerson(person);

//02 class
const person01: Person01 = new Person01("Woong", 31);
const name: string = person01.name;
const age: number = person01.age;

console.log(person01);
console.log(name);
console.log(age); // const name = "OH"; /error! Person constructor is readOnly

console.clear();

//03 class
const person02: Person02Impl = new Person02Impl("Woong", 31);
console.log(person02.printPerson02("Woong", 31));
console.clear();
