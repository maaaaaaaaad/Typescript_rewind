// method has keyword that a "function".

export class Method {
  constructor(public value: number = 0 /* default value = 0 */) {}
  method(): void {
    console.log(`value : ${this.value}`);
  }
}

export class _Method {
  constructor(public value: number = 0 /* default value = 0 */) {}
  method = (): void => {
    console.log(`value : ${this.value}`);
  };
}
