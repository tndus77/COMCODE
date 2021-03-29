'use strict';

for(let i=0; i<11; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);   
}

for(let i=0; i<11; i++){
    if (i>7){
        break;
    }
    console.log(i);
}