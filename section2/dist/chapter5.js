// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum에 숫자를 직접 적지 않아도 자동으로 위에서부터 0, 1, 2 순으로 들어감.
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "신수정",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "이혜진",
    role: Role.USER, // 1 <- 인반 유저
};
const user3 = {
    name: "이슬아",
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
