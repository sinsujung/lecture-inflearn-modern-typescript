/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: "name" | "age") {
    return person[key];
}

const person: Person = {
    name: "신수정",
    age: 27,
};

getPropertyKey(person, "name");