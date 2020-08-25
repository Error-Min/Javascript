function number(num1, num2) {
    console.log(num1 + num2); //더하기
    console.log(num1 - num2); //빼기
    console.log(num1 * num2); //곱하기
    console.log(num1 / num2); //나누기
    console.log(num1 % num2); //나머지
    console.log(num1 ** num2); //거듭제곱

    console.log(num1 + num2 * 2); //곱하기 우선
    console.log((num1 + num2) * 2); //더하기 우선
}

number(5, 2);
/* =============================================== */
console.log((25 / 5) + (15 % 4)); // 8

console.log((3 + 27) * 12 ** (5 % 3)) // 거듭제곱이 곱셈보다 우선순위