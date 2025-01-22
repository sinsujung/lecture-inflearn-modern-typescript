/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "구름이",
    color: "white",
    breed: "말티즈",
};

animal = dog;

// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgramingBook = {
    name: string;
    price: number;
    skill: string;
};

let book : Book;
let programingBook : ProgramingBook = {
    name: "한 입  크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programingBook;
// programingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
};

let book3: Book = programingBook;

function func(book: Book) {
    func({
        name: "한 입 리액트",
        price: 33000,
        // skill: "reactjs",
    });
}
func(programingBook);

