var budgetController = (function(){
    //These are the private methods we cannot access outside the function
    var a = 10;
    var add = function(b){
        return a+b;
    }
    return{
        //This is the Public method where we can access
        publicTest: function(x){
            //console.log(add(x));
            return add(x);
        }
    }
})();

var UIController = (function(){
    //UI Related code
})();

//To integrate the 1st and 2nd  modules and pass them as the arguements
var controller = (function(budgetCntrl,appCntrl){
   var sum = budgetCntrl.publicTest(99);
   //Only when we return this we can access the methods outside
   return{
       publicMethod: function(){
           console.log(sum)
       }
   }

})(budgetController,UIController);