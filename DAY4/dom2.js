'use strict';

// innerHTML
const elem = document.getElementById('greeting');
console.log(elem.innerHTML);

elem.innerHTML = 'Hi <span>there!</span>';
console.log(elem.innerHTML);

const fruits = document.getElementById('fruits');

// 노드 삽입
fruits.innerHTML += '<li class="banana">Banana</li>';
//fruits.innerHTML = fruits.innerHTML + '<li class="banana">Banana</li>';
//fruits.innerHTML = '<li class="apple">Apple</li>' + '<li class="banana">Banana</li>';

// 노드 교체
fruits.innerHTML = '<li class="orange">Orange</li>';

// 노드 삭제
fruits.innerHTML = '';

// insertAdjacentHTML
const text = document.getElementById('text');
text.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
text.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
text.insertAdjacentHTML('beforeend', '<p>beforeend</p>');
text.insertAdjacentHTML('afterend', '<p>afterend</p>');

console.clear();

// 노드 생성 및 추가
const li = document.createElement('li');
const textNode = document.createTextNode('Apple');
li.appendChild(textNode);
console.log(li);
fruits.appendChild(li);

// 복수의 노드 생성 및 추가
const numbers = document.getElementById('numbers');

['One', 'Two', 'Three'].forEach(text => {
  const li = document.createElement('li');
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);
  numbers.appendChild(li);
});

// 비효율적 -> DOM 트리를 여러번 갱신
// 해결 : 컨테이너 요소에 DOM에 삽입할 노드를 추가하고, 그 컨테이너 요소를 기존 노드의 자식 노드로 추가

const container = document.createElement('div');

['Four', 'Five', 'Six'].forEach(text => {
  const li = document.createElement('li');
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);
  container.appendChild(li);
});

numbers.appendChild(container);

// DocumentFragment -> 기존 DOM과는 별도로 존재
// DocumentFragment에 자식 노드를 추가해도 DOM은 변경되지 않음
// DocumentFragment 노드를 DOM에 추가하면 자신은 제거되고 자식노드만 DOM에 추가

const languages = document.getElementById('languages');
const fragment = document.createDocumentFragment();
['Python', 'Java', 'C'].forEach(text => {
  const li = document.createElement('li');
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);
  fragment.appendChild(li);
});

languages.appendChild(fragment);

console.clear();

// 노드 삽입
// 1. appendChild
// 2. insertBefore
{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode('Peach'));
  fruits.insertBefore(li, fruits.lastElementChild);
}

// 노드 이동
const [Python, java, ] = languages.children;
languages.appendChild(Python);
languages.insertBefore(java, languages.lastElementChild);

// 노드 복사
// cloneNode(true or false)
// false : shallow copy -> 노드 자신만을 복사 => default
// true : deep copy -> 모든 자손 노드를 포함해서 복사
const peach = fruits.firstElementChild;

const shallowClone = peach.cloneNode();
shallowClone.textContent = 'Mango';
fruits.appendChild(shallowClone);

const deepClone = fruits.cloneNode(true);
fruits.appendChild(deepClone);

// 노드 교체
const newChild = document.createElement('li');
newChild.textContent = 'Melon';

fruits.replaceChild(newChild, fruits.firstElementChild);

// 노드 삭제
fruits.removeChild(fruits.lastElementChild);


// 속성
const { attributes } = document.getElementById('user');
console.log(attributes);

console.log(attributes.id.value);
console.log(attributes.type.value);
console.log(attributes.value.value);

// getAttribute
const input = document.getElementById('user');
const inputValue = input.getAttribute('value');
console.log(inputValue);

// setAttribute
input.setAttribute('value', 'javascript');
console.log(input.getAttribute('value'));

// hasAttribute
console.log(input.hasAttribute('value'));
console.log(input.hasAttribute('checked'));

// removeAttribute
input.removeAttribute('value');
