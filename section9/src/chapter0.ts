/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a : number;
};

type ObjB = {
    a : number;
    b : number;
};

type B = ObjB extends ObjA ? number : string;

// 조건부 타입은 제네릭과 함께 사용해야 그 위력을 발휘한다.

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T>(text : T) : T extends string ? string : undefined;
function removeSpaces(text: any) {
    
    if(typeof text === 'string') {
        return text.replaceAll(" ","");
    } else {
        return undefined;
    }
}

let result = removeSpaces("hi im yehchic");
result.toUpperCase();
// console.log(result);

let result2 = removeSpaces(undefined);