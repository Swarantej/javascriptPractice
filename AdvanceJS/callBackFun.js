
var years = [1990,1995,2000,2005];
function  calAge(years,func){
    var arrAge = [];
    for(var i = 0;i < years.length; i++){
        arrAge.push(func(years[i]));
    }
    return arrAge;
}

function calculageAge(birthDate){
    return 2020-birthDate;
}

//This is callback functions since CalAge is a function and it is calling another func calculateAGe
var currentAge = calAge(years,calculageAge);
console.log('Present Age is : '+currentAge);

function voteEligibility(age){
    return age >=18;
}

var vote = calAge(currentAge,voteEligibility);
console.log('Vote ELigibility of : '+vote);

function maxHeartRate(age){
    if(age>=18 && age <81){
        return Math.floor(206.9 -(0.67*age))
    }else{
        return -1;
    }
}

var heartRate = calAge(currentAge,maxHeartRate);
console.log(heartRate);

//First Class Functions, Returning a Function inside a function and passing an Arg to the returned func


function interviewQuest(job){
    if(job==='teacher'){
        return function(name){
            console.log('What do you teach, '+name);
        }
    }else if(job==='Programmer'){
        return function(name){
            console.log('What do you code, '+name);
        }
    }else{
        return function(name){
            console.log('What do you do? '+name);
        }
    }
}
//1st way of passing the arguements 1st Passing to Interview Ques and then to the return function
interviewQuest('teacher')('Swaran');
//2nd way of passing args
var porgrammerJob = interviewQuest('Programmer');
porgrammerJob('Swarantej');

var NoJob = interviewQuest('NoJob');
NoJob('Vuppu');