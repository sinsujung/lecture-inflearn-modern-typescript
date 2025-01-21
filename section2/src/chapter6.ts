// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num : number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};


// unknown과 any 타입의 차이
// unknown은 모든 값을 저장할 수 있지만 반대로는 안된다.

// num = anyVar; 는 가능하지만 num = unknownVar; 는 불가능

if (typeof unknownVar === "number") {
    num = unknownVar;
}