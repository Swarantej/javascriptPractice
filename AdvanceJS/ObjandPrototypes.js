
//Functions
var details = {
    name: 'Swaran',
    yearOfBirth: '1993',
    city: 'Hyderabad',
    state: 'Telangana'

};

console.log('This name from normal Function and calling its variables '+details.name);
//Creating Constructor
 var Person = function(name, yearOfBirth,city,state){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.city = city;
     this.state = state;
     this.age = function(){
         console.log(2020-this.yearOfBirth);
     }
 }

 //Using Prototype to add the functions

 Person.prototype.retriementAge =function(){
     console.log(2030 - this.yearOfBirth);
 };

 //We can declare the variables in prototypes

 Person.prototype.lastName = 'Vuppu';

 //Calling using the constructor
 var myown = new Person('Tej','2003','HYD','TS');
 var other = new Person('abc',35,'Bang','LKAR')
 console.log('The below age based on Constructor ');
 myown.age();
myown.lastName
 other.age();
 other.lastName;
 console.log( other.lastName);
 //Calling from prototype
 myown.retriementAge();
 
 console.log('This is from the Prototype variables last name ' +myown.lastName);

