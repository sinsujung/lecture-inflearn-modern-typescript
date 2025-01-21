/**
 * Unknown 타입 (전체 집합)
 * 모든 타입들의 슈퍼 타입
 */

function unknownExam() {
    // 업캐스팅
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e: unknown = undefined;

    // 다운 캐스팅 x
    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;

}

/**
 * Never 타입 (모든 집합의 부분 집합)
 * 모든 타입들의 서브 타입
 */

// 반환값이 아예 없다는 뜻
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc() : void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입 (치트키 타입)
 * 타입 계층도를 무시함
 * 모든 타입의 슈퍼타입으로 위치하기도, 모든타입의 서브타입으로 위치하기도 한다.(never 제외)
 * never 타입은 순수한 공집합이기 때문에 어떠한 것도 들어갈 수 없음
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // neverVar = anyVar;
}