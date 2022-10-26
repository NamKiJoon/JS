"use strict";

let str = 10 * `hello`;

console.log(str);
// NaN ( Not a Number)
// 정의되지 않은 값이나 표현할 수 없는 값, 추상 타입은 숫자지만 숫자로 표현할 수 없는 연산을 시도한 경우

let num;
console.log(num);
console.log(typeof num);

let obj = null;
console.log(obj);
console.log(typeof obj);

let obj2 = {
    name: `객체`,
};

console.log(obj2);
console.log(typeof obj2);

// undefined;
// undefined;

// null;
// Object;
// name: "객체";
