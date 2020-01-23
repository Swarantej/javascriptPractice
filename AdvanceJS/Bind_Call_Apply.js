
var myDetails ={
    name: 'Swaran',
    age: '26',
    greetings: function(style,timeOfDay){
        if(style=='formal'){
            console.log('Good '+timeOfDay+' ladies and gentlemen. I\'m '+this.name+' i\'m '+this.age+' years old');
        }
        if(style=='informal'){
            console.log('Hey all Good '+timeOfDay+' I\'m '+this.name+' i\'m '+this.age+' years old');
        }
    }
}

myDetails.greetings('formal','Morning');

/*
- Adding different variable and calling the greetings function from myDetails varibale
- Using call method
*/

var otherDetails= {
    name: 'Vuppu',
    age: '27'
}
myDetails.greetings.call(otherDetails,'informal','Afternoon');

/*
- Similar to call method we have APPLY method as well which accepts 2 arguments in an array
- EG:myDetails.greetings.call(otherDetails,['informal','Afternoon']);
*/

/* BIND 
- function, this bind function doesnot call function immediatel
- This function generates the copy of the function and stores in varibale
*/

//Here we are passing only one argument of the greetings function that is style only not timeOfDay
var swaranDetails = myDetails.greetings.bind(myDetails,'informal');

//We can pass the secomd argument in the obj variable, This is calling CARRYING

swaranDetails('Evening!');

//Passing other Obj Varible details

var vuppuDetails = myDetails.greetings.bind(otherDetails,'formal');

//We can pass the secomd argument in the obj variable, This is calling CARRYING

vuppuDetails('Noon!');

/*
- Calculate the Eligibility of age using the bind function
*/

var years = ['1995','2000','2005','2010'];
function calculateEligibilty(years, func){
    var arrResu=[];
    for(var i =0; i<years.length ;i++){
        arrResu.push(func(years[i]));
    }
    return arrResu;
}

function calculateAge(el){
    return 2020- el;
}

function voteAge(age){
    return  age > 20;
}

var currentAge = calculateEligibilty(years,calculateAge);
console.log('Test '+currentAge);

var vote = calculateEligibilty(currentAge,voteAge);
console.log('eligible for vote '+vote);


//Using Binding function to add the Limit for vote Limi


function voteLimit(limit, age){
    return age>=limit;
}

//Here we are calling Votelimit along with Preset Argument of AGE i.e., here it is 18

 var indiaVote = calculateEligibilty(currentAge,voteLimit.bind(this,18));
 console.log('India Vote '+indiaVote)

 //Using the same for other country age, using BINDING

 
 var usVote = calculateEligibilty(currentAge,voteLimit.bind(this,15));
 console.log('US Vote '+usVote)