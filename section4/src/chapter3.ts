/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 타입스크립트에서 함수 오버로딩을 해주기 위해서 가장 먼전 해줘야 하는 것
// 함수에 어떤 버전이 있는지 알려줘야 함

// (아래)버전들 선언 -> 오버로드 시그니처: 함수를 오버로딩하기 위해 각각 매개변수별로 다른 버전을 명시해주기 위해 씀
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
    if(typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

// func(); (오류 발생)
func(1);
// func(1, 2); (오류 발생)
func(1, 2, 3);
