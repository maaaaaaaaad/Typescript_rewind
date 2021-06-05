export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(
    //
    makePerson("Woong", 20),
    makePerson("Sin", 20)
  );
}
