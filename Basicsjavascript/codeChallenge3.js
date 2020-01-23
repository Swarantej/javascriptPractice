
var tip;
function tipCalculator(bill){
    if(bill<50){
        tip = bill*0.2;
        console.log(tip)
    }else if(bill>50 && bill<250){
        tip = bill*0.15;
        console.log(tip)
    }else{
        tip = bill*0.1;
        console.log(tip)
    }
    return tip;
}

var tipFor1Restaruant = tipCalculator(48);
var tipFor2Restaruant = tipCalculator(124);
var tipFor3Restaruant = tipCalculator(300);


console.log('Tip for the 1st restaruant is '+tipFor1Restaruant);
console.log('Tip for the 2nd restaruant is '+tipFor2Restaruant);
console.log('Tip for the 3rd restaruant is '+tipFor3Restaruant);

var bills =[48,124,300];
var tipResultsArray  = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
console.log(tipResultsArray);
console.log('Tips in the form of Array '+tipResultsArray);

var finalPaidAmount = [bills[0]+tipResultsArray[0],bills[1]+tipResultsArray[1],bills[2]+tipResultsArray[2]];
console.log(finalPaidAmount);
console.log('Total amount paid are '+finalPaidAmount);