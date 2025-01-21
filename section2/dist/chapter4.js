// 타입 별칭 : 타입을 변수처럼 정의해서 사용할 수 있는 타입 별칭
// 동일한 스코프에 중복된 이름으로 별칭을 선언하면 오류 발생!!(중복 주의)
//만약 fucntion이 있고 함수 내 type User가 있으면 func 함수 안에서는 안에 있는 User가 타입이 되고, 함수 밖에서는 밖에 있는 User가 타입이 된다.
function func() {
}
let user1 = {
    id: 1,
    name: "신수정",
    nickname: "yehchic",
    birth: "1999.04.20",
    bio: "안녕하세요",
    location: "서울시",
};
let user2 = {
    id: 2,
    name: "뤂둥이",
    nickname: "yehchic",
    birth: "1999.04.20",
    bio: "안녕하세요",
    location: "서울시",
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};
// let countryNumberCodes : CountryNumberCodes = {
//     Korea: 410,
//     UnitedState: 840,
//     UnitedKingdom: 826,
// };
// 인덱스 시그니처 사용 시 주의사항
// 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입이다.
let countryNumberCodes = {
    Korea: 410,
};
export {};
