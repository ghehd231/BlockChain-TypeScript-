interface Human {
  //javascript에서는 작동 안됌(typescript의 코드)
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'ghehd',
  age: 22,
  gender: 'male',
};

// const sayHi = (name: string, age: number, gender: string): string => {
const sayHi = (person: Human): string => {
  return `hello ${person.name}, ${person.age}, ${person.gender}`;
};
// console.log(sayHi('ghehd', 444, 'male222'));
console.log(sayHi(person));
export {};
