/**
 * keyof 연산자
 */

// 1.
type Person = typeof person;

//2 .
// interface Person {
//     name: string;
//     age: number;
// }

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "신수정",
    age: 27,
};

const result = getPropertyKey(person, "name");

console.log(result);