'use strict';

// Function
// input, output, function의 이름
// 1) 여러 번 재사용할 수 있는 sub program
// 2) 한 가지의 일 또는 계산을 수행하는 data type



// 1. Function declaration
// one function === one thing
// doSomething
// function name(param1, param2, ...) { body code... return;}

function printHello() {
  console.log('Hello');

  //return undefined;
}
printHello();

function printLog(message) {
  console.log(message);
}
printLog('Hello!');
printLog(1234);



// 2. Parameters
// primitive parameters : passed by value
// object parameters : passed by reference

function changeVal(primitive) {
  primitive += 100;
  return primitive;
}

let num = 100;
const browser = { name : 'IE' };

console.log(num);
console.log(browser);

num = changeVal(num);

console.log(num);
console.log(browser);



// 3. Default parameters (added in ES6)
// parameter에 default 값을 지정해서 인자가 전달되지 않을 경우 default 값으로 대체
// param = 'default value'

function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hello!');



// 4. Rest parameters (added in ES6)
// ...param -> 배열 형태로 전달

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // #1
  for (const arg of args) {
    console.log(arg);
  }

  // #2
  args.forEach((arg) => console.log(arg));
}

printAll('Comcode', 'Web', 'Programming', 'JavaScript');



console.clear();
// 5. Local scope
// 밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다.
let globalMessage = 'global';   // global variable
function printMessage() {
  let message = 'hello';        // local variable
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = 'hello'; // local variable
  }
  // console.log(childMessage);
}
printMessage();
// console.log(message);



// 6. Return a value

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade algorithm
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade algorithm
}



// 7. Function expression
// 함수 선언과 동시에 변수를 할당할 수 있다.

const print = function () { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));



// 8. Callback function
// : 인자로 전달되어 상황에 맞게 호출되는 함수

function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('Yes!');
};

// named function
// 1) 디버깅할 때 함수의 이름이 나오게 하기 위해서
// 2) 재귀 호출
const printNo = function print() {
  console.log('No!');
  //print(); 재귀적 사용
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// 9. Arrow Function (added in ES6)
// function 키워드 대신 화살표(=>) 이용
// const printSomething = () => console.log('Something');
// always anonymous function

const add = (a, b) => console.log(a);
add(1, 5);

const simpleMultiply = (a, b) => {
  console.log(a * b);
  return a * b;
};



// 10. IIFE : Immediately Invoked Function Expression (즉시 실행 함수)
// 선언과 동시에 호출
// (함수 선언)();

(function hello() {
  console.log('Hello, IIFE');
})();

