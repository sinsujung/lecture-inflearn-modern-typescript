/**
 * 함수 타입 표현식
 * 이를 이용하면 타입 별칭을 사용해서 함수의 타입을 정의할 수 있음
 */

// 타입 자리에 타입 별칭(Operation)이 아닌 (a: number, b: number) => number를 넣어도 된다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;

const multiply: Operation = (a, b) => a * b;

const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
    (a:number, b:number): number;
};
const add2: Operation2 = (a, b) => a + b;

const sub2: Operation2 = (a, b) => a - b;

const multiply2: Operation2 = (a, b) => a * b;

const divide2: Operation2 = (a, b) => a / b;

