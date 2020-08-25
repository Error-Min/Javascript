//리턴문
function getTwo() {
    return 2; //getTwo에 2를 반환
}

console.log(getTwo()); // 2 출력

/* ====================================== */

//파라미터가 있는 함수
function getTwice(number) {
    return number * 2;
}

console.log(getTwice(5));

/* ====================================== */

//파라미터가 있는 리턴문 
function getTwice(number) {
    return number * 2;
}

let x = getTwice(5); // 함수 x는 5 이며 getTwice 파라미터 name에 5를 전달
let y = getTwice(2); // #

console.log(x * y); // 10 * 4

/* ====================================== */

// 여기에 코드를 입력해 주세요.
function interestCalculator(amount, term, rate) {
    return amount * term * rate / 100;
}

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');

/* ====================================== */