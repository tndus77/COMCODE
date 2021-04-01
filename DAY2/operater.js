'use strict';

// 1. String concatenation
// : +

console.log('my ' + 'computer');
console.log('1' + 2);


// 2. Numeric operators
// : +, -, *, /, %, **

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3);



// 3. Increment and decrement operators
// : ++, --

let counter = 2;

// 1) prefix operators
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 2) postfix operators
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. Assignment operators
// : =

let x = 2;
let y = 6;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;



// 5. Comparison operators
// 1) 대소 관계 비교 연산자
// :  <, <=, >, >=

console.log(10 < 6);   // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);   // greater than
console.log(10 >= 6);  // greater than or equal

console.clear(); 
// 2) 동등/일치 비교 연산자
// : ==, ===

const stringOne = '1';
const numberOne = 1;

// == : Loose equality -> 값이 같으면 같다
console.log(stringOne == numberOne);
console.log(stringOne != numberOne);

// === : Strict equality -> 값과 type이 모두 같으면 같다
console.log(stringOne === numberOne);
console.log(stringOne !== numberOne);

console.clear();

// Quiz!
console.log('false' == false);    // false
console.log(0 == '0');            // true
console.log(0 === '0');           // false
console.log(0 == false);          // true
console.log(0 === false);         // false
console.log('' == false);         // true
console.log('' === false);        // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false



// 6. Logical operators
// : ||, &&, !

const value1 = false; // value
const value2 = 4 < 2; // expression

function check() {    // function
  for (let i = 0; i < 10; i++) {
    //wasting time
  }
  return true;
}

// 1) || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// 2) && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// 3) ! (not)
console.log(!value1);



// 8. Conditional statement
// 1) if...else 문

const name = 'web';
if (name === 'web') {
  console.log('Hello, web!');
} else if (name === 'comcode') {
  console.log('Welcome, comcode!');
} else {
  console.log('unknown');
}

// cf) Ternary operator : ?
// condition ? value1 : value2;

console.log(name === 'comcode' ? 'yes' : 'no');

// 2) Switch 문

const browser = 'Safari';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('I love you!');
    break;
  default:
    console.log('nothing');
    break;
}



// 9. Loop statement
// 1) for 문

for (let i = 3; i > 0; i--) {
  console.log(i);
}

// cf) 중첩 for문

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 2) while 문

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 3) do ... while 문
// body code is executed first, then check the condition

i = 3;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);


// 4) break, continue
// - break : loop 종료
// - continue : 현재 step을 중단하고 다음 step으로 넘어가서 계속 실행

const string = 'Hello, World!';
const search = 'l';
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;
  count++;
}
console.log(count);


console.clear();
// Quiz
// Q1. 0부터 10까지의 숫자 중 짝수만 출력 (use continue)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// Q2. 0부터 10까지의 숫자 중 7까지만 출력 (use break)

for (let i = 0; i < 11; i++) {
  if (i > 7) break;
  console.log(i);
}
