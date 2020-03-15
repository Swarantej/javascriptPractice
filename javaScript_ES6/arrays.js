//Arrays

const boxes = document.querySelectorAll('.box');
//ES -5


var boxesArr5 = Array.prototype.slice.call(boxes);
/*
boxesArr5.forEach(function(curr) {
    curr.style.backgroundColor = 'dodgerBlue';
    
});
*/

//ES 6
/**
 * Array.from(boxes) returns the NodeList to ARRAY
 */
 
 var boxesArr6 = Array.from(boxes);
 boxesArr6.forEach(curr => curr.style.backgroundColor = 'green');


 //For Loop in ES 5
/*
 for(var i =0; i<boxesArr5.length; i++){
     if(boxesArr5[i].className === 'box blue'){
         continue;
     }
     boxesArr5[i].textContent = 'I changed blue';
 }
 */

 for(const curr of boxesArr6){
    if(curr.className.includes('blue')){
        continue;
    }
    curr.textContent = 'I changed blueeee';
     
 }

 //ES 5 to find the value greater than 18

 var ages = [10,12,14,16,18,20];
 var full = ages.map(function(cur){
     return cur>=18;
 });
 console.log(full);
 console.log(full.indexOf(true));
 console.log(ages[full.indexOf(true)]);

 //ES 6 to find the value greater than 18 using 'FINDINDEX' and FIND Method

 //FindIndex finds the index of element which is true
 console.log(ages.findIndex(curr=> curr>=18));

 //Find finds the element which is true
 console.log(ages.find(curr=> curr>=18));