//IIFE - Immediately Invoked Java Functions
/*
- In IIFE we do not have any names for the function
- it is invoked within itself
- it is usefil for data privacy and keep variables hidden from outside
- It id not for reusable code
*/


(function(){
   var score =  Math.random()*10;
   console.log((score<5));
})();

//Passing argument

(function(winScore){
    var score =  Math.random()*10;
    console.log(score>10-winScore);
 })(5);
