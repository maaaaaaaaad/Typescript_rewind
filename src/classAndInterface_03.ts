//interface is a just spec

interface Person03 {
  name: string;
  age: number;
  printPerson02: (name: string, age: number) => string;
}

class Person03Impl implements Person03 {
  constructor(public name: string, public age: number) {
    this.printPerson02(name, age);
  }

  printPerson02 = (name: string, age: number) => {
    const result: string = `name : ${name}, age : ${age}`;
    return result;
  };
}

export default Person03Impl;
