'use strict';

//1. 
function sayHi(name) {
    console.log(`Hi! ${name}`);
}

const button = document.querySelector('.btn');
button.onclick = () => console.log('button click');
button.onclick = () => console.log('button click 2'); //덮어쓰기로 출력

//3. addEventListener
button.addEventListener('click', function () {
    console.log('button click[1]');
});

button.addEventListener('click', function () {
    console.log('button click[2]');
});

const mouseOver = () => console.log('mouse over');

button.addEventListener('mouseover', mouseOver);

//removeEventListener
button.removeEventListener('mouseover', mouseOver);

const msg = document.querySelector('.msg');

const showCoords = (e) => msg.textContent = `x: ${e.clientX}, y: ${e.clientY}`;

document.onclick = showCoords;




