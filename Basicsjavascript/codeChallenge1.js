
/*
BMI Calculation
*/

var markHeight = 2;
var johnHeight = 3;

var markWeight = 60;
var johnWeight = 60;

var markBMI, johnBMI;

markBMI = markWeight/(markHeight*markHeight);
console.log("Mark BMI " +markBMI);

johnBMI = johnWeight/(johnHeight*johnHeight)
console.log("John BMI "+ johnBMI);

var result = markBMI>johnBMI;
console.log('Mark\'s BMI is greater than John\'s BMI ? '+result);
