'use strict';

const box = document.querySelector('.box');

const show = (e) => box.textContent = `x: ${e.clientX}, y: ${e.clientY}`;

document.onclick = show;
//드래그 시작 지점의 마우스 포인터 위치
const initialMousePos = { x: 0, y: 0};

//이동한 지점의 마우스 포인터 위치
const offset = { x: 0, y: 0};

//시작 지점의 포인터 좌표를 저장
box.addEventListener('mousedown', (e) => {
    //좌표를 받아오는 코드(박스 안쪽 영역의 좌표)
    initialMousePos.x = e.clientX - offset.x;
    initialMousePos.y = e.clientY - offset.y;
    document.addEventListener('mousemove', move);
});

//드래그 하고 있는 시점
const move = (e) => {
    //브라우저 영역의 좌표
    offset.x = e.clientX - initialMousePos.x;
    offset.y = e.clientY - initialMousePos.y;

    box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
} 

//드래그 종류
document.addEventListener('mouseup', () => {
    box.style.backgroundColor = `#${parseInt(Math.random()*0xffffff).toString(16)}`;
    box.style.borderColor = `#${parseInt(Math.random()*0xffffff).toString(16)}`;
    
    document.removeEventListener('mousemove', move);
    //console.log(offset.x, offset.y);
});