'use strict';
// function calculate(command, a, b)
// -> 함수 선언 다양하게 연습하기
// command : add(+), substract(-), multiply(*), divide(/), remainder(%)
// divide -> 0에 대한 처리 필수

// #1 simple function
function calculate(command, a, b) {
    switch(command) {
        case "add":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;
        case "/":
            if(b != 0)
                return a / b;
            else
                return "Wrong command!"
            break;
        case "%":
            return a % b;
            break;
        default:
            return "Wrong command!";
    }
    
}

console.log('result: ' + calculate("add", 1, 3));
console.log('result: ' + calculate("-", 1, 3));
console.log('result: ' + calculate("multiply", 1, 3));
console.log('result: ' + calculate("/", 4, 2));
console.log('result: ' + calculate("%", 5, 3));
console.log('result: ' + calculate("]", 1, 3));

// #2 Return a value
function add(a, b) {
    return  a + b;
}
const resultAdd = add(1, 3);
console.log(`result: ${resultAdd}`);

function subtract(a, b) {
    return a - b;
}
const resultSub = subtract(1, 3);
console.log(`result: ${resultSub}`);

function multiply(a, b) {
    return a * b;
}
const resultMul = multiply(1, 3);
console.log(`result: ${resultMul}`);

function divide(a, b) {
    return a / b;
}
const resultDiv = divide(4, 2);
console.log(`result: ${resultDiv}`);

function reminder(a, b) {
    return a % b;
}
const resultRemind = reminder(5, 3);
console.log(`result: ${resultRemind}`);

// #3 Function expression
const result = function () {
    return 'result: ';
};
const printResult = result;

const sumAgain = add;
console.log(printResult() + sumAgain(1, 3));

const deleteAgain = subtract;
console.log(printResult() + deleteAgain(1, 3));

const multiplyAgain = multiply;
console.log(printResult() + multiplyAgain(1, 3));

const divideAgain = divide;
console.log(printResult() + divideAgain(4, 2));

const reminderAgain = reminder;
console.log(printResult() + reminderAgain(5, 3));


// #4 Arrow Function
const addAB = (a, b) => {
    console.log('result: ' + add(a, b));
    return a + b;
};
addAB(1, 3);

const subtractAB = (a, b) => {
    console.log('result: ' + subtract(a, b));
    return a - b;
};
subtractAB(1, 3);

const multiplyAB = (a, b) => {
    console.log('result: ' + multiply(a, b))
    return a * b;
};
multiplyAB(1, 3);

const divideAB = (a, b) => {
    console.log('result: ' + divide(a, b));
    return a / b;
};
divideAB(4, 2);

const reminderAB = (a, b) => {
    console.log('result: ' + reminder(a, b));
    return a % b;
};
reminderAB(5, 3);

//#5 IIFE
(function plux() {
    console.log('result: ' + add(1, 3));
})();

(function minus() {
    console.log('result: ' + subtract(1, 3));
})();

(function multiply2() {
    console.log('result: ' + multiply(1, 3))
})();

(function divide2() {
    console.log('result: ' + divide(4, 2));  
})();

(function reminder2() {
    console.log('result: ' + reminder(5, 3));
})();
