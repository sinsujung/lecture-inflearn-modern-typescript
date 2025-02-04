/**
 * 제네릭 : 일반적인 , 포괄적인 함수
 */

// 제네릭 함수
// 타입 변수 T : 타입을 담는 변수, 상황에 따라 다른 변수를 담을 수 있음. 즉, 함수가 호출될 때 타입이 결정 됨.
function func<T>(value: T): T {
    return value;
}

let num = func(10);
// num.toUpperCase();

if(typeof num === "number") {
    num.toFixed();
}

let bool = func(true);

let  str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);