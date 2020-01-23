var mark ={
    firstName: 'Mark',
    weight: 50,
    height: 1,
    BMI: function(){
        this.bmi = (this.weight)/(this.height*this.height);
        return this.bmi;

    }
}

mark.BMI();
var markBMI =mark.bmi;

var john ={
    firstName: 'John',
    weight: 50,
    height: 5,
    BMI: function(){
        this.bmi = (this.weight)/(this.height*this.height);
        return this.bmi;

    }
}
john.BMI();
var johnBMI = john.bmi;

if(johnBMI>markBMI){
    console.log('John BMI '+johnBMI+' is greater than Mark '+markBMI);
}else if(johnBMI<markBMI){
    console.log('Mark BMI '+markBMI+' is greater than John '+johnBMI);
}else{
    console.log('Mark and John BMI\'s are same '+johnBMI)
}