'use strict';

//Q1
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

const result = fruits.join();
console.log(result);

//Q2. 문자열을 배열로
const fruit = 'apple, banana, orange, melon, lemon'

const splitarr = fruit.split(", ");
console.log(splitarr);

//Q3.
const array = [1, 2, 3, 4, 5];
const reversearr = array.reverse();
console.log(reversearr);

//Q4.
const array2 = [1, 2, 3, 4, 5];
const deletearr = array.slice(2);
console.log(deletearr);

//Q5.
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 22, true, 45),
    new Student('B', 20, false, 80),
    new Student('C', 24, true, 90),
    new Student('D', 21, false, 65),
    new Student('E', 22, true, 85)
];

//Q5
/*for(let i = 0; i < students.length; i++){
    if(students[i].score >= 90) {
        console.log(students[i].name);
    }
}*/
const result = stduents.find((stduent) => students.score === 90);
console.log(result);

//Q6. 배열 만들기  filter
const result = stduents.filter((student) => student.enrolled);
console.log(result);

//Q7. students의 score만 포함한 배열 만들기 map //callback함수의 인자로
const result = students.map((student) => student.score);
console.log(result);

//Q8. score가 50보다 낮은 학생이 있는지 확인하기
const result = students.some((student) => student.score < 50);
console.log(result);


//Q9. 학생들의 평균 score 구하기
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result);

//Q10. students의 score만 포함한 문자열 만들기
const result = students.map((student) => student.score).join();
console.log(result);

const result2 = students.map((student) => student)
//Q11. students의 score만 포함한 정렬된 
