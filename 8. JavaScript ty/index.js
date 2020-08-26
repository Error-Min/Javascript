// 형변환(Type Conversion)
console.log("\n 형변환")
let x = 123;

console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

//문자 -> 숫자
console.log("\n 문자 -> 숫자")
let y = '123';
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

//불린 -> 숫자
console.log("\n 불린 -> 숫자")
let z = false;
console.log(z);
console.log(Number(z));
console.log(typeof z);
console.log(typeof Number(z));

//String, Number, Boolean
console.log("\n String, Number, Boolean")
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));