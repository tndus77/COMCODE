'use strict';

const div = document.querySelector('div');
console.log(div.style);

div.style.color = 'blue';

// 스타일 추가
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'yellow';
div.style['background-color'] = 'pink';

console.log(div.style);

// className
const box = document.querySelector('.box');
console.log(box.className);
box.className = box.className.replace('red', 'blue');
console.log(box.className);

// classList
console.log(box.classList);

// DOMTokenList API
// add
box.classList.add('web', 'js');
console.log(box.classList);

// remove
box.classList.remove('web', 'js');
console.log(box.classList);
box.classList.remove('x');
console.log(box.classList);

// item
console.log(box.classList.item(0));
console.log(box.classList.item(2));

// contains
console.log(box.classList.contains('box'));
console.log(box.classList.contains('blue'));

// replace
//box.classList.replace('red', 'blue');
console.log(box.classList);

// toggle
box.classList.toggle('web');
console.log(box.classList);
box.classList.toggle('web');
console.log(box.classList);
