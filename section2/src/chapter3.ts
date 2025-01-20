//object
//?의 의미는 해당 프로퍼티가 있어도 없어도 된다 라는 뜻(선택적 프로퍼티(optional properties)).
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "신수정",
};

// let dog: {
//     name: string,
//     color: string,
// } = {
//     name: "구름이",
//     color: "white",
// };

// user.id;

user = {
    name: "홍길동",
}

// readonly > 프로퍼티의 값을 변경하지 못하도록 하는 키워드
let config: {
    readonly apiKey: string,
} = {
    apiKey: "MY API KEY"
}

// config.apiKey = "hacked";