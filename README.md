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

## 13.Array 03 index

**StrNumber = string[] | number[], Error that the testArr item type is "never".**

src/array_13_index.ts

```javascript
type StrNum = (string | number)[];
let newArr: StrNum = [];

export const index = (testArr: StrNum): StrNum => {
  for (let i of testArr) {
    newArr.push(i);
  }
  return newArr;
};
```

src/index.ts

```javascript
import { index } from "./array_13_index";

const indexArr = [1, 2, "a", "b", "c"];
const result13 = index(indexArr);
console.log(result13); // [1, 2, "a", "b", "c"]
```
