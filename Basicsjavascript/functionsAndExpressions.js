/*
@@@Functions
Functions doesnot return any value, they just execute the action
*/
function calculateAge(birthYear){
    return 2020-birthYear;
}

var age = calculateAge(1993);
console.log('Age of the person is '+age);

function calculateRetirementAge(year, name){
    var currentAge = calculateAge(year);
    console.log('currentAge of '+name+' is '+currentAge+' years');
    var yearsToRetirement = 65-currentAge;
    if(yearsToRetirement>0){
        console.log(name+' has '+yearsToRetirement+' to retire');
    }else{
        console.log(name+' has already retired');
    }
}

calculateRetirementAge(1990, 'Swaran');

calculateRetirementAge(1950, 'Tej');

/*
@@@Expressions
Expressions  return  value in variable, it produces immediate results
*/

var work = function(job,name){
    switch(job){
        case 'teacher':
            console.log(name+' is a computer teacher');
            break;
        case 'driver':
            console.log(name+' drives a cab');
            break;
        case 'singer':
            console.log(name+' sings in concert');
            break;
        default:
            console.log(name+' Does nothing like me');
    }

}
console.log(work('teacher','Swaran'));
