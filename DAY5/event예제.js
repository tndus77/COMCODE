'use strict';

const input = document.querySelector('.event');
const textbox = document.querySelector('.txtbox');

document.addEventListener('click', () => {
    input.innerHTML += '<p>click</p>'
});

document.addEventListener('mouse up', () => {
    input.innerHTML += '<p>mouse up</p>'
});

document.addEventListener('mousedown', () => {
    input.innerHTML += '<p>mouse down</p>'
});

textbox.addEventListener('focus', () => {
    input.innerHTML += '<p>focus</p>'
});

textbox.addEventListener('blur', () => {
    input.innerHTML += '<p>blur</p>'
});
