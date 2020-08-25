function boolean(test1, test2) {
    console.log(test1 > test2);
    console.log(test1 < test2);
    console.log(test1 >= test2);
    console.log(test1 <= test2);
    console.log(test1 === test2);
    console.log(test1 == test2);
    console.log(test1 !== test2);
}

boolean(1, 2);

console.log("\n and연산");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("\n or연산");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("\n not연산");

console.log(!true);
console.log(!false);

console.log("\n not연산 반전");

console.log(!!true);
console.log(!!false);