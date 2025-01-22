/**
 * 타입 추론
 */

// 함수의 매개변수에는 타입을 적어줘야한다. typescript가 매개변수의 type을 추론하기 어렵기 때문

let a = 10; //-> 상수 타입이 아닌 number type!! > 타입 넓히기
let b = "hello";
let c = {
    id: 1,
    name: "신수정",
    profile: {
        nickname: "yehchic",
    },
    urls: ["https://velog.io/@s1nsu/posts"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// any 진화 (암묵적 any는 진화를 한다.)
let d; //any
d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];

// arr = [5, "hi"];

// arr = ["hi", 4];
