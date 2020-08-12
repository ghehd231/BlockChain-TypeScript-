const name = 'ghehd',
  age = 24,
  gender = 'male';

const sayHi = (name, age, gender) => {
  // gender? 파라미터 뒤에 ?가 붙으면 값을 받지 않아도 컴파일 시킬 수 있음(선택적)
  console.log(`hello ${name}, ${age}, ${gender}`);
};
// sayHi(name, age); 이런식으로 파라미터의 갯수가 맞지 않으면 컴파일 에러남
// ***** 함수 파라미터에 ? 붙을 때 제외 *****
sayHi(name, age, gender);
export {};
