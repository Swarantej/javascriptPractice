
var boxES5 =  {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            //var str = 'This is box num '+this.position+' and it is in color '+this.color;
            var str = 'ES 5: This is box num '+self.position+' and it is in color is '+self.color;
            alert(str);
        });
    }
}

/**
 * COncept this keyword in the above function will refer to the global object that is WINDOW obj
 * So when we use this keyword in method then it refer to the object of the method
 * Even in the above case we are using the This keyword un function so it is referring to
 * Global window Object so we're getting Undefined, SO we will declare another variable as this inside the 
 * method and accees it inside the function instead of this keyword
 */

//Calling ES 5 code
//boxES5.clickMe();

/**
 * ES 6 code
 * 
 */

const boxES6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',()=>{
            //var str = 'This is box num '+this.position+' and it is in color '+this.color;
            var str = 'ES6: This is box num '+this.position+' and it is in color is '+this.color;
            alert(str);
        });
    }
}
//boxES6.clickMe();


const boxES66= {
    color: 'green',
    position: 1,
    //Below we are using the arrow function hence this key word is passing to immeadiate function
    // Hence this key word referring to global varibale
    clickMe: () =>{
        document.querySelector('.green').addEventListener('click',()=>{
            //var str = 'This is box num '+this.position+' and it is in color '+this.color;
            var str = 'ES66: This is box num '+this.position+' and it is in color is '+this.color;
            alert(str);
        });
    }
}
//boxES66.clickMe();



// Using teh prototype and binding for ES 5

function Person(name){
    this.name = name;
}
//ES5 Code
var friends = ['Mani','Nikhil','Teja'];

Person.prototype.myES5Friends= function(friends){
    //We need to map the array of friends so we use map method in Javascript
    var arr = friends.map(function(el){
        return this.name+' is friend of '+el;
    }.bind(this));
    console.log(arr);

}
/**
 * Even in the above case we won;t be able to get the element name
 * SO inorder to get this keyword value we need to use the bind concept
 * which we will create a copy of function and pass the "THIS "keyword
 */
//Directly calling the function

new Person('Swaran').myES5Friends(friends);

//##########@@@@@@@@@@@@  ES 6 Code @@@@@@@@

Person.prototype.myES5Friends= function(friends){
    //We need to map the array of friends so we use map method in Javascript
    var arr = friends.map(el =>{
        return `${this.name} is friend of ${el}`;
    });
    console.log(arr);

}

new Person('Vuppu').myES5Friends(friends);