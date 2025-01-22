/**
 * 타입 단언(type assertion)
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "신수정",
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog: Dog = {
    name: "구름이",
    color: "white",
    breed: "말티즈",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; -> 규칙 어긋남

/**
 * const 단언
 */

let numb4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// 위와 같이 as const로 단언해주면 아래와 같이 수정이 불가능
// 모든 프로퍼티에 readOlny를 붙일 필요가 없어 코드가 간결해짐

// cat.name = '';

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "신수정",
};

const len: number = post.author!.length;