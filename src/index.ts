class Human {
  public name: string;
  public age: number;
  public gender: string;

  //constructor : 생성자 => 클래스가 시작할때마다 호출(클래스로 부터 객체를 만들때마다)
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human('Lynn', 22, 'female');

const person = {
  name: 'ghehd',
  age: 22,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `hello ${person.name}, ${person.age}, ${person.gender}`;
};

console.log(sayHi(lynn));
export {};
