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

## 11.Array 01 split

**Array is Object to Javascript. because array is instance of "Array".**

src/array_11_split.ts

```javascript
const split = (str: string, del: string = ""): string[] => str.split(del);
```

src/index.ts

```javascript
import split from "src/array_11_split.ts";

const _arr01 = split("Hello World", ","); // ['Hello World']
const _arr02 = split("Hello World"); // ['H', 'e', 'l', 'l', ... 'r', 'l', 'd']
```
