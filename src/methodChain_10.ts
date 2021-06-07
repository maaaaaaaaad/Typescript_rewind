//Method chain will be a must have return that a "This".

export class calculator {
  constructor(public value: number = 0) {}
  plus(value: number) {
    this.value += value; // 4 + 3 = 7
    return this; // 7
  }

  multi(value: number) {
    this.value *= value; // 7 * 2 = 14
    return this; // 14
  }
}
