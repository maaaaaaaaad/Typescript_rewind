// Array is Object to Javascript. because array is instance of "Array"

// ex1)
const stringElement: string = "1,2,3,4";
const splitComma: string = ",";
export const arr01: string[] = stringElement.split(splitComma).map((ele) => {
  return ele;
});

// ex2)
export const split = (str: string, del: string = " "): string[] =>
  str.split(del);
