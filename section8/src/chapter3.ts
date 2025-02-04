/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// interface PartialUser {
//     id?: number;
//     name?: string;
//     age?: number;
// }

/**
 * 위 두 인터페이스를 보면 거의 완전히 중복 코드이다.
 * 이런 상황이 맵드 타입이 필요한 상황이다.
*/

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

/**
 * 위 코드가 맵드 타입을 사용한 코드,
 * 해석해보면
 * {} 안의 [] : 객체의 프로퍼티 key가 무엇이 될 수 있는지를 정의하는 곳
 * {} 안의 [] 바깥 : 프로퍼티의 키들이 어떤 value 타입을 가질 것인지 정의하는 곳
 */


// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // ,,, 기능
    return {
        id: 1,
        name: "신수정",
        age: 27,
    };
}

const user = fetchUser();
// user.id = 1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ... 수정하는 기능
}

updateUser({
    // id: 1,
    // name: "신수정",
    age: 26,
});