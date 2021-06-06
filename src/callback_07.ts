export const f = (callback: () => void, c: string, d: string) => {
  console.log(c);
  callback();
  console.log(d);
};
