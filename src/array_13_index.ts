type StrNum = (string | number)[];
let newArr: StrNum = [];

export const index = (testArr: StrNum): StrNum => {
  for (let i of testArr) {
    newArr.push(i);
  }
  return newArr;
};
