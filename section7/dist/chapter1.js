/**
 * 첫번째 사례
 */
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
/**
 * 두번째 사례
 */
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]);
// 0
let str = returnFirstValue(["hello", "mynameis"]);
// hello
let fixed = returnFirstValue(["hello", 1, 2]);
/**
 * 세번째 사례
 */
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); //10
export {};
// let var4 = getLength(10); 
