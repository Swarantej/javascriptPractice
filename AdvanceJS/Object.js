
var objPrototype = {
    calculateAge: function() {
        console.log(2020 - yearOfBirth);
    }
};


var myDetails = Object.create(objPrototype);
myDetails.name = 'Swaran';
myDetails.yearOfBirth = 1993;
myDetails.city= 'Hyd';
myDetails.calculateAge;

/*
* Objects and Primitives
*/

var a = 20;
var b =a;
a= 50;
console.log(a);
console.log(b);

//Objects

var obj1 ={
    name: 'Swaran',
    age: '27'
}

//Here obj1 and Obj2 both will print 27 bcoz , we are 
var obj2 = obj1;
obj1.age = 55;
console.log('Print from Obj 2 '+obj2.age);
console.log('Print from Obj 1 '+obj1.age)

//Functions

var year = 1993;
var obj = {
    name: 'Swaran',
    city: 'Hyd'
}

function change(a,b){
    a.name= 'Swarantej',
    city= 'Hyderabad',
    year = 1995
}

change(obj,year);
console.log(obj.name);
console.log(city)
console.log(year)