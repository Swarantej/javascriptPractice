/*
//ES - 5

var person5 = function(name,year,place){
    this.name = name;
    this.year = year;
    this.place = place;
}

person5.prototype.calAge = function(){
    var age = new Date().getFullYear() - this.year;
    console.log(age); 
}

var swaran = new person5('Swarantej',1993,'Hyd');
console.log(swaran);

//Using calsses in ES6

class person6 {
    constructor(name,year,place){
        this.name = name;
        this.year = year;
        this.place = place;
    }

    //Writing the method inside th class

    calAge(){
        var age = new Date().getFullYear() - this.year;
        console.log(age); 
    }
    //Wrting Static method inside the class and it cannot be called by Obj creatd by classes
    static greeting(){
        console.log('Hey,there!')
    }
}

//Calling the class
const myDetails = new person6('Swarantej',1993,'Hyderabad');
console.log(myDetails);
person6.greeting();

/*

/**
 * Inheritance using in ES 5
 */

var person5 = function(name,year,place){
    this.name = name;
    this.year = year;
    this.place = place;
}

person5.prototype.calAge = function(){
    var age = new Date().getFullYear() - this.year;
    console.log(age); 
}

var otherDetails = function(name,year,place,education,passout){
    person5.call(this,name,year,place);
    this.education =education;
    this.passout = passout;
}


//Inherting the methods from person5
otherDetails.prototype = Object.create(person5.prototype);

//we can also add an additional method and call it seperatly

otherDetails.prototype.passoutInc = function(){
    this.passout++;
    console.log(this.passout);
}

//calling the functions

var display = new otherDetails('tej',1993,'Hyd','LPU',2014);
display.calAge();
display.passoutInc();

//Using Es 6

class person6 {
    constructor(name,year,place){
        this.name = name;
        this.year = year;
        this.place = place;
    }

    //Writing the method inside th class

    calAge(){
        var age = new Date().getFullYear() - this.year;
        console.log(age); 
    }
    //Wrting Static method inside the class and it cannot be called by Obj creatd by classes
     static greeting(){
        console.log('Hey,there!')
    }
}


class details6 extends person6 {

    constructor(name,year,place,education,passout){
        super(name,year,place);
        this.education= education;
        this.passout= passout;
       
    }
    increment(){
        this.passout = this.passout++;
        console.log(this.passout);
    }

}

var display6 = new details6('Vuppu Swaran',1992,'Hyderabad','CMR',2008);
display6.calAge();
//SInce it is  static it will not be accesibale
display6.greeting();
display6.increment();