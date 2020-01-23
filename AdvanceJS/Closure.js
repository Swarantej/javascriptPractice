/*CLOSURE
- An inner function has access to the variables and paramertes of its outer function even after
- the outer function has been returned
- the Variables will still be held on the EXECUTIOn stack so when the return function is called
- it can access the variables
*/

function retirement(retirmentAge){
    var a = " Years left to retirement :";
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        var yrsLeft = retirmentAge - age;
        console.log(yrsLeft +a);
    }
}

var indiaRetirement =  retirement(65);
indiaRetirement(1995);

var usRetirement =  retirement(66);
usRetirement(1995);

retirement(50)(1990);

//Interview Ques

function interviewQuest(job){
    var teach = 'What do you teach, ';
    var code = 'What do you code, ';
    var noJob = 'What do you teach, ';

    return function(name){
        if(job==='teacher'){
             console.log(teach+name);
       }else if(job==='Programmer'){
             console.log(code+name);
     }else{
             console.log(noJob+name);
    }    
}
}
//1st way of passing the arguements 1st Passing to Interview Ques and then to the return function
var int = interviewQuest('Programmer');
int('Swarantej');
    //2nd way of passing args
interviewQuest('teacher')('Swaran');
