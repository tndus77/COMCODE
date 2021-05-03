'use strict';

// getElementById
const elemid = document.getElementById('apple');
console.log(elemid);
elemid.style.color = 'red';

// getELmentsByTagName
const elemstag = document.getElementsByTagName('li');
console.log(elemstag);

[...elemstag].forEach(elem => {
  elem.style.color = 'blue';
});

elemstag[1].style.color = 'green';

// getElementsByClassName
const elemc = document.getElementsByClassName('fruit');
console.log(elemc);

[...elemc].forEach(elem => {
  elem.style.color = 'red';
});

// querySelector
const elemq = document.querySelector('#banana');
console.log(elemq);

// querySelectorAll
const elems = document.querySelectorAll('.fruit');
const elem = document.querySelector('.fruit');
console.log(elems);
console.log(elem);

const all = document.querySelectorAll('*');
console.log(all);

console.clear();

// childNodes
console.log(fruits.childNodes);

// children
console.log(fruits.children);

// firstChild
console.log(fruits.firstChild);
console.log(fruits.firstChild.nextSibling);
console.log(fruits.firstELementChild);

// lastChild
console.log(fruits.lastChild);
console.log(fruits.lastChild.previousSibling);

// hasChildNodes() : 자식 노드의 존재 확인
console.log(fruits.hasChildNodes());

// 텍스트 노드
const text = document.getElementById('apple');
console.log(text.firstChild);

// 부모 노드
const parent = document.querySelector('#orange');
console.log(orange.parentNode);


// nodeType
console.log(document.nodeType);
console.log(parent.nodeType);

const textNode = text.firstChild;
console.log(textNode.nodeType);

// nodeName
console.log(document.nodeName);
console.log(parent.nodeName);
console.log(textNode.nodeName);

console.clear();

// nodeValue
console.log(document.nodeValue);
console.log(parent.nodeValue);
console.log(textNode.nodeValue);

textNode.nodeValue = 'hello';
console.log(textNode.nodeValue);

// textContent
const elemtext = document.getElementById('hello');
console.log(elemtext.nodeValue);
console.log(elemtext.textContent);

elemtext.textContent = 'Hi <span>there!</span>';