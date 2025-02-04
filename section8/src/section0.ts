/**
 * 인덱스드 엑세스 타입
 */
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
        // location: string;
    }
}[];

//  1. 인덱스에 들어가는 것은 타입이다.
//  2. 존재하지 않는 프로퍼티 이름을 적으면 오류 발생
//  3. 프로퍼티에서 id 프로퍼티 타입만 가지고 오고 싶으면 Post["author"]["id"]로 작성할 것.
function printAuthorInfo (author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

// 인덱스에 들어갈 것은 무조건 타입이다.
const post : PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "신수정",
        age: 27,
    },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];