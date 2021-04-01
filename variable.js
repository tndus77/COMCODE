// 1. use strict (added in ES5)
// use strict를 사용하는 이유
// 1) JavaScript -> flexible => 비상식적인 코드 사용 가능
//    ex) 선언되지 않은 변수에 값 할당

'use strict';

let a;
a = 4;
console.log(a);



// 2. Variable(변수) : 변경될 수 있는 값
// : 하나의 값을 저장하기 위해 확보한 메모리 공간 그 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름
// 변수를 선언한다 -> 변수를 생성한다
// var, let, const

// var (Before ES6)
// : 선언과 초기화가 동시에 진행

var num;
console.log(num);

// var를 권장하지 않는 이유
// 1) 변수의 중복 선언이 허용

var num = 4;
console.log(num);

// 2) 변수 hoisting
// : 변수를 어디에 선언했던 상관없이 변수 선언을 가장 위로 끌어 올리는 것

// 정상적인 코드
var age;
age = 20;
console.log(age);

// 비정상적인 코드
let month;
console.log(month);
month = 3;

// 3) block level scope 무시


// var의 단점을 보완하기 위해 등장한 키워드 (added in ES6)
// let, const

// let
// : mutable data type -> 값을 변경할 수 있음

let name = 'comcode';
console.log(name);
name = 'javascript';
console.log(name);

// const
// : immutable data type -> 값을 변경할 수 없음
// 상수(<-> 변수)를 선언할 때 사용하는 키워드
// const를 권장하는 이유
// 1) 보안
// 2) 다양한 thread가 동시에 값을 변경할 수 없음
// 3) 개발자의 실수를 줄일 수 있음

const DAY = 'Monday';
const MAX_NUMBER = 30;



// 3. Scope : 유효 범위
// local scope : 함수 몸체 내부
// global scope : 코드 전체
// global 변수 -> 권장하지 않음!
// 1) 생명 주기가 길다 -> 메모리 공간을 항상 차지
// -> class, function, if, for문 등 필요할 때 정의
// 2) 값이 변경될 위험이 크다

// var -> function level scope
// : 오로지 함수의 코드 블록만을 local scope로 인정

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5


// block level scope -> let, const
// : 모든 코드 블록을 local scope로 인정
// -> block 안에 적힌 내용은 block 밖에서 볼 수 없음

let n = 10;

function func1() {
  let n = 100;

  for (let n = 1; n < 3; n++) {
    console.log(n); // 1 2
  }

  console.log(n); // 100
}

func1();
console.log(n); // 10



console.clear();
// 4. Data Types -> 7가지
// 1) primitive type
// : number, string, boolean, undefined, null, symbol
// 2) object/reference type
// : 6가지 제외한 나머지 data type
//  ex) object, function, array 등


// - number
// JavaScript는 변수를 선언할 때 data type을 따로 명시하지 않아도 됨

const count = 5;
const size = 8.5;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// special numeric values : Infinity, -Infinity, NaN, bigint

const infinity = 1 / 0;
const nInfinity = -1 / 0;
const nAn = 'not a number' * 2;
console.log(infinity);
console.log(nInfinity);
console.log(nAn);

// bigint (added in ES11)
// 숫자 마지막에 n

const bigInt = 1234567890123456789012345678901234576890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// - string
// char 타입 없음

const char = 'c';
const comcode = 'comcode';

const greeting = 'hello ' + comcode;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// cf) template literal
// ``(백틱) 이용
// 1) ``안에 있는 문자열 그대로 출력

let template = 'hello \nworld';
console.log(template);
template = `hello
world`;
console.log(template);

// 2) 표현식 삽입

template = '1 + 2 = ' + (1 + 2);
console.log(template);
template = `1 + 2 = ${1 + 2}`;
console.log(template);


// - boolean
// : true, false
// false 나타낼 수 있는 값
// -> 0, null, undefined, NaN, ''

const truth = true;
const test = 3 < 1; // false
console.log(`value: ${truth}, type: ${typeof truth}`);
console.log(`value: ${test}, type: ${typeof test}`);


// - undefined
// : 값이 할당되지 않은 것

let x;
console.log(`value: ${x}, type: ${typeof x}`);


// - null
// : 변수에 값이 없다 -> 의도적으로 명시

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// - symbol (added in ES6)
// : 고유의 key 값을 부여 
// Symbol() -> symbol 값은 외부로 노출되지 않음

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// - object
const itsMe = { name : 'minseon', age : 20 };
console.log(itsMe);
//itsMe = { name : 'JavaScript', age : 26 };
itsMe.age = 22;
console.log(itsMe);



// 5. Dynamic Typing
// C, Java -> 정적 타입 언어
// JavaScript -> 동적 타입 언어

console.clear();
let foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol('id');
console.log(typeof foo);

foo = { name : 'foo' };
console.log(typeof foo);