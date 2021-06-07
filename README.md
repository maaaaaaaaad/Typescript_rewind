# Typescript rewind

## 10.Method chaining
**Method chain will be a must have return that a "This".**

src/methodChain_10.ts
```javascript
export class calculator {
  constructor(public value: number = 0) {}
  plus(value: number) {
    this.value += value;
    return this;
  }

  multi(value: number) {
    this.value *= value; 
    return this; 
  }
}
```

src/index.ts
```javascript
const chain = new calculator(4).plus(3).multi(2).value;
console.log(chain);
console.clear();
```
