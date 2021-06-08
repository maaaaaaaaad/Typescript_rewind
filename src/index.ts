import Person04 from "./AbstractClass_04";
import { person, printPerson } from "./anonymousInterface_01";
import { arr01, split } from "./array_11_split";
import { join } from "./array_12_join";
import { f } from "./callback_07";
import Person03Impl from "./classAndInterface_03";
import Person01 from "./class_02";
import { indexable, _indexable } from "./indexableType_08";
import { calculator } from "./methodChain_10";
import { Method, _Method } from "./method_09";
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
const result07 = f(() => console.log("DOOOOOONG"), "OH", "WOONG");
console.log(result07);
console.clear();

//08 indexable type
//(1)
const result08 = indexable("name", "Woong");
console.log(result08);
//(2)
const _result08 = _indexable("name", "Dong");
console.log(_result08);
console.clear();

//09 method
const result09 = new Method(100);
const _result09 = result09.method();
console.log(_result09);

const asd = new _Method(1000);
const _asd = asd.method();
console.log(_asd);
console.clear();

//10 method chain
const chain = new calculator(4).plus(3).multi(2).value;
console.log(chain);
console.clear();

//11 array_split
const result11 = arr01;
console.log(result11);

const _arr01 = split("Hello World", ",");
console.log(_arr01);

const _arr02 = split("Hello World");
console.log(_arr02);
console.clear();

//12 array_join
const result12 = join(_arr02);
console.log(result12);
console.clear();
