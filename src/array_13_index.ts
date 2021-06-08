// StrNumber = string[] | number[], Error that the testArr item type is "never"

type StrNum = (string | number)[];
let newArr: StrNum = [];

export const index = (testArr: StrNum): StrNum => {
  for (let i of testArr) {
    newArr.push(i);
  }
  return newArr;
};
