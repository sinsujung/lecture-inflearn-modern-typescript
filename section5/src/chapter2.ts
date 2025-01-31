/**
 * 선언 합침
 */

// 인터페이스는 동일한 이름으로 중복선언이 가능하고, 중복선언을 하면 모든 선언이 합쳐짐
interface Person {
    name: string;
}

interface Person {
    // name: number; -> 충돌, 반듯이 동일한 타입으로 할 때만 충동 x
    name: string;
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 1,
};

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};
