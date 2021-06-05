//interface is a just spec

interface Person02 {
  name: string;
  age: number;
  printPerson02: (name: string, age: number) => string;
}

class Person02Impl implements Person02 {
  constructor(public name: string, public age: number) {
    this.printPerson02(name, age);
  }

  printPerson02 = (name: string, age: number) => {
    const info02: string = `name : ${name}, age : ${age}`;
    return info02;
  };
}

export default Person02Impl;
