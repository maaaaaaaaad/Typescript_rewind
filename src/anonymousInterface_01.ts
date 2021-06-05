//anonymous interface define a something function

export let person: {
  name: string;
  age: number;
  toggle?: boolean;
} = { name: "Woong", age: 30, toggle: true };

export const printPerson = (me: {
  name: string;
  age: number;
  toggle?: boolean;
}) => {
  if (me.toggle === true) {
    console.log("Hello True");
  } else {
    console.log("Bye False");
  }
};
