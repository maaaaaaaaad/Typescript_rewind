import Person04 from "./AbstractClass_04";
import { person, printPerson } from "./anonymousInterface_01";
import { f } from "./callback_07";
import Person03Impl from "./classAndInterface_03";
import Person01 from "./class_02";
import Person05 from "./staticClass_05";
import { person06 } from "./typeConversion_06";

//01 anonymous interface
console.log(person);
printPerson(person);

//02 class
const person02: Person01 = new Person01("Woong", 31);
const name: string = person02.name;
const age: number = person02.age;

console.log(person02);
console.log(name);
console.log(age); // const name = "OH"; /error! Person constructor is readOnly

console.clear();

//03 class implement interface
const person03: Person03Impl = new Person03Impl("Woong", 31);
console.log(person03.printPerson02("Woong", 31));
console.clear();

//04 abstract class
const person04: Person04 = new Person04("Woong", 31);
console.log(person04.printPerson04("Woong", 31));
console.clear();

//05 static class
const person05: Person05 = Person05.printPerson05("Woong", 31);
console.log(person05);
console.clear();

//06 type conversion
//person06.name; / error! because object is not define name.
let name1 = (<{ name: string }>person06).name; // conversion
let name2 = (person06 as { name: string }).name; // assertion
console.log(name1);
console.log(name2);
console.clear();

//07 callback
const result = f(() => console.log("DOOOOOONG"), "OH", "WOONG");
console.log(result);
console.clear();
