abstract class AbPerson04 {
  abstract name: string;
  constructor(public age: number) {}
}

class Person04 extends AbPerson04 {
  constructor(public name: string, public age: number) {
    super(age);
    this.printPerson04(this.name, this.age);
  }

  printPerson04 = (name: string, age: number): string => {
    const result: string = `name : ${name}, age : ${age}`;
    return result;
  };
}

export default Person04;
