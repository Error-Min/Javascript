// 함수선언
function prinSquare(x) {
    console.log(x * x);
}

prinSquare(2);

/* ============================================= */
function testname(name) {
    console.log("안녕하세요 " + name + "님!");
}

testname("Lee Sang Min")

/* ============================================= */

// 여기에 코드를 입력해 주세요.
function teraToGiga(ssdData1) {
    console.log(ssdData1 + "TB는");
    console.log((1024 * ssdData1) + "GB 입니다.");
}

function teraToMega(ssdData2) {
    console.log(ssdData2 + "TB는");
    console.log(((1024 * 1024) * ssdData2) + "MB 입니다.");
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);

/* ============================================= */

function printSum(a, b) {
    console.log(a + b);
}

printSum(10, 5);
printSum(13, 2);

/* ============================================= */

function introduce(name, birth, nationality, job) {
    console.log("안녕하세요! 반갑습니다.");
    console.log("제 이름은 " + name + " 이고,");
    console.log("제 생년 월일은 " + birth + "이며,");
    console.log("국적은 " + nationality + "입니다.");
    console.log("직업은 " + job + "입니다.");
    console.log("잘 부탁드립니다!");
}

introduce("이상민", 960305, "대한민국", "프로그래머");

/* ============================================= */

// 여기에 코드를 입력해 주세요.
function bmiCalculator(name, weight, tall) {
    console.log(name + "님의 체질량지수는 " + (weight / (tall * tall / 10000)) + "입니다.");
}

// 테스트
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);