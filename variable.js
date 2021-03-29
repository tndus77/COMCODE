// 1.use strict (added in ES5)
//use strict를 사용하는 이유
//1) javascript는 very flexible --> 비상식적인 코드 사용 가능
//   ex) 선언되지 않은 변수에 값 할당

'use strict';

let a;
a=4;
console.log(a);


//2. Variable(변수) : 변경될 수 있는 값
//: 하나의 값을 저장하기 위해 확보한 메모리 공간 그 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름
// 변수를 선언한다 --> 변수를 생성한다
// var, let, const

var num;
console.log(a);
// var를 권장하지 않는 이유 
//1) 선언과 초기화가 동시에 진행, 변수의 중복 선언 허용

//2) 변수 hoisting: 변수를 어디에 선언했던 상관없이 변수 선언을 가장 위로 끌어 올리는 것

//--> 이를 보완한게 let

//3) black level scope 무시
////////black level scope --> let, const
//--> block 안에 적힌 내용은 block 밖에서 볼 수 없음

//let과 const와의 차이점
// let은 mutable const는 immutable 

//const를 권장하는 이유
//1) 보안
//2) 다양한 스레드가 동시에 값을 변경할 수 없음
//3) 개발자의 실수를 줄일 수 있음

const DAY='Monday';
const MAX_NUMBER = 30;


//3. Scope : 유효 범위
//local scope : 함수 몸체 내부
//global scope : 코드 전체 --> 권장하지 않음, 생명 주기가 김--> 메모리 공간 차지

//4. Data Type --> 7가지
//1. primitive type
//: number, string, boolean, undefined, null, symbol
//2. object/reference type
//:6가지 제외한 나머지 data type
// ex) object, function, array 등


//- number
//javascript는 변수를 선언할 때 data type을 따로 명시하지 않아도 됨

const count=5;
const size=8.5;
console.log(`value: ${count}, type: ${typeof count}`)

//-string
// char 타입 없음

//cf) template literal 
