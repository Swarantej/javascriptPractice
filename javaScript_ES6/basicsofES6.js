/*
- Varibales declaration using let and const in ES6
- both 'const' and 'let' keyword in ES6 are block scoped
- 'var' in ES5 is Function scoped
- In ES 6 if we use the variable which is not defined we will get Variable Not Declared Error
- But in ES5 if we use the variable which is not defined no error is thrown instead we get UNKNOWN
- We cannot change the assignment declared as CONST Variable
*/


/*

// ############@@@@@@@@@@@ ES5 @@@@@@@@@@@@###########
var name = "Swaran";
var age = 27;
console.log("Variable with no declared in ES5 " +blankValue);
var blankValue ;

console.log(name+' '+age);
name = "Swarantej"
console.log('Change Name ' +name);

 // ############@@@@@@@@@@@ ES6 @@@@@@@@@@@@###########
let es6Name = "Vuppu";
const es6Age = "28";
//es6Age="30";
//console.log("Variable with no declared in ES 6 " +noValue);
//let noValue ;
console.log(es6Name+' '+es6Age);

*/


/**
 * ES 5 -> varibales are function scoped
 */

 /*
 function es5FunctionScope(passed){
     if(passed){
         var name ="VSWARNTEJ";
         var year = 1993;
         console.log('ES5 declared and accessing inside if block '+name+' '+year);
     }
 }

 es5FunctionScope(true);

 //Now console Log/access the varibales outside if block in ES5 , no error is thrown

 function es5BlockScopeError(passed){
    if(passed){
        var name ="CMR";
        var year = 2008;
    }
    console.log('ES5 var declared inside if block and accessing outside if block '+name+' '+year)
}

es5BlockScopeError(true);

*/



 /**
  * ES6 is only block scope that is the varibales will be accessed only inside the blocks
  */

  /*
 function es6BlockScope(passed){
    if(passed){
        let name ="VST";
        const year = 1993;
        console.log('ES6 declared and accessing inside if block '+name+' '+year);
    }
}

es6BlockScope(true);

 //Now console Log/access the varibales outside if block in ES6 ,  error is thrown

 function es6BlockScopeError(passed){
    if(passed){
        let name ="LPU";
        const year = 2014;
    }
    console.log('ES6 var declared inside if block and accessing outside if block ERROR..!!  '+name+' '+year)
}

es6BlockScopeError(true);

*/

/**
 * Blocks in ES6 , which is very similar to IIFE in ES5
 * We can declare the varibales inside the block and can be accessed from the block only
 * This isn how data privacy is achieved in ES6
 * However in ES5 data privacy is achieved usine IIFE
 */

 /*
 //ES6 Block scope

 {
     let a =100;
     const b = 'Sugar';
     var c = "I can be accessed from outside";
 }
 console.log('ES5 '+c);
 console.log('ES6 '+a);
 console.log('ES6 '+b);
 
 //IIFE in ES 5

 (function(){
    var ab = 11;
 })();

 console.log('ES5- IIFE '+ab)

 */


 /*
 //##############@@@@@@@@ STRINGS in ES6 @@@@@@@@@@@#############

 let firstName = 'Swaran';
 let lastName = 'tej';
 const yearOfBirth = 1993;

 function calAge(year){
     return 2020- year;
 }

 //ES5

 console.log('This is '+firstName+' '+lastName+
 '.I was born in '+yearOfBirth+' My Current Age is '+calAge(yearOfBirth));

 //Es6, We use String literals using ` `

 console.log(`This is ${firstName} ${lastName}.
 I was born in ${yearOfBirth} and my current age is ${calAge(yearOfBirth)}`);

 //Methods in Strings
var name = `Vuppu`
 console.log(firstName.startsWith('S'));
 console.log(firstName.endsWith('S'));
 console.log(firstName.includes('a'));
 console.log(firstName.repeat(4));
 console.log(`${name} `.repeat(3));
 */

 /**
  * Arrow Functions
  */


  const years = [1990,1995,2000,2005];

  //Calculate Age in ES5

  var ageES5 = years.map(function(birthyear){
      return 2020-birthyear;
  });

  console.log(ageES5);

  //Calculate using ES6 Arror function in single index and in single line

  let ageES6 = years.map(birthyear => 2020-birthyear);
  console.log(ageES6);

  //When we have 2 parameters

  ageES6 = years.map((birthyear,index)=>
    `Age for year ${years[index]} is : ${2020-birthyear}`);
    console.log(ageES6);


    //When needed to write more than 2 lines of code we need to include code in {}

    ageES6 = years.map((birthyear,index)=>{
        const now = new Date().getFullYear();
        const currentAge  = now - birthyear;
        return `Curent Age of the person born in ${years[index]} is : ${currentAge} `
    });

    console.log(ageES6);


    /**
     * Destructuring:
     * It gives the convinent way for extracting data from data structure like from an OBJECT/ARRAY
     */

     /*
     //ES-5 from an ARRAY

     var person = ['Swaran',27];
     var name = person[0];
     var age = person[1];

     //ES -6 from an ARRAY

     const[nameES6, ageeES6] = ['Swarantej',27];
     console.log(nameES6);
     console.log(ageeES6);

    
     //ES - 6 From an Object

     var objES6 = {
         firstName:'vuppu',
         year : '1993'
     };

    //1st way
     const {firstName, year} = objES6;
     console.log(firstName);
     console.log(year);

     //2nd way
     const {firstName:a, year:b} = objES6;
     console.log(a);
     console.log(b);

     //Using Destructuring concept in the function

     function calRetirementAge(year1){
         const age1 = new Date().getFullYear() - year1;
         return [age1,65-age1];
     }
     //Now we will use destructuring concept to print the num seperatly

     const[age1,retirementYears]= calRetirementAge(1993);
     console.log(`Curreent Age is : ${age1} Years`);
     console.log(`Years left for retirement is : ${retirementYears} Years`);

     */

     // ######### @@@@@ SPREAD OPERATOR @@@@@@ #########

     /*

     function addNum(a,b,c,d){
         return a+b+c+d;
     }

     var sum1 = addNum(10,20,30,40);
     console.log(`Normal addition : ${sum1}`);

     //When the variables are in Array

     var num = [1,2,3,4];

     //ES 5- Using apply method

     var sum2 = addNum.apply(null,num);
     console.log(`Array addition using ES 5 apply method: ${sum2}`);

     //ES6- Using spread operator

     const sum3 = addNum(...num);
     console.log(`Array addition using ES 6 spread operator: ${sum3}`);

     //Join  two different Arrays in ES 6 using  Spread operator

     const a1 = ['a','b','c'];
     const a2 = ['e','f','g'];
     const a3 = [...a1,...a2];
     console.log(a3)

     // Spread Operator is also used to convert the NodeList

     const h = document.querySelector('h1');
     const boxes = document.querySelectorAll('.box');
     //Using spread Operator joining 2 arrays
     const all = [h,...boxes];

     //Converting the NodeList boxes to Array using Array.from method

     Array.from(all).forEach(cur => cur.style.color = 'purple');

*/


// ######## @@@@@@ REST OPERATOR @@@@@ ########
/**
 * Rest operator allows us to pass the arbitrart num of args into a function
 * It takes the individual valyes and converts into an Array
 * Arguement Keyword in Javascript is not an array, however its structure looks like an Array
 * Rest Operator is used as function decleration as an arguement
 */

 /*
 function isFullAge(){
    console.log(arguments);
    //Converting values into any array using 
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(curr) {
        console.log((2016-curr)>=18);
        
    });
 }

 isFullAge(1990,1995,2000,1993);

 // We can achivve the above using ES - 6 rest parameter

 function isFullAgeES6(...years){
     years.forEach(cur => console.log(2020-cur>=18));
 }

 isFullAgeES6(1990,1995,2000,2005,2010,2015);

 */

 /*

 // Passing an Agruments like ageLimit based on Diff Counrties

 function isFullAge(limit){
    console.log(arguments);
    //Converting values into any array using  and passing 1, will split after 1, since index 1 is limit
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function(curr) {
        console.log((2016-curr)>=limit);
        
    });
 }

 isFullAge(20, 1990,1995,2000,1993);

 // We can achivve the above using ES - 6 rest parameter

 function isFullAgeES6(limit,...years){
     years.forEach(cur => console.log(2020-cur>=limit));
 }

 isFullAgeES6(40,1990,1995,2000,2005,2010,2015);

 */


 /*

 function person(firsName, yearOfBirth,lastName, place){

    //to set the defualt values

    lastName === undefined ? lastName = 'tej' : lastName;
    place === undefined ? place = 'Hyd' : place;
     this.firsName = firsName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.place = place;
 }
 var john = new person('Swaran',1993);
 console.log(john);
 */


 //Es 6 Directly passing the defualt value in the arguements

function person(firsName, yearOfBirth,lastName='Vuppu', place='Telanaga'){

    //to set the defualt values

     this.firsName = firsName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.place = place;
 }
 var john = new person('Swaran',1993);
 console.log(john);