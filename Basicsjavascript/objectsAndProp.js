/*var obj = {
    firstName:'Swaran',
    lastName: 'Tej',
    family: ['Dad','Mom','Brothers']
};

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj['family']);
console.log(obj.family[0]);
var x= 'lastName';
console.log(obj[x]);
obj.lastName = 'Teja';

console.log(obj[x]);


//Creating an Object

var obj1 = new Object();
obj1.city = 'Hyderabad';
obj1.country = 'India';

console.log(obj1)*/


//Methods in Objects

var obj = {
    firstName:'Swaran',
    lastName: 'Tej',
    family: ['Dad','Mom','Brothers'],
    birthYear: 1993,
    calAge: function(){
        this.age = 2020 - this.birthYear;
    }
};
obj.calAge();
console.log(obj);
console.log(obj.age);