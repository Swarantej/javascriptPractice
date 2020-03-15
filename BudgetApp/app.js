var budgetController = (function () {
    //Creating constructore for Expenses and Income
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Creating the prototype chain for calculating the percentages

    Expense.prototype.calPercentages = function(totalIncome){
        if(totalIncome>0){
            this.percentage = Math.round((this.value/totalIncome)*100);
        }else{
            this.percentage = -1;
        }
    }

    //Create prototype chain to display the percentage

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    //Create an Internal Function to Calculate the total for 'EXP' & 'INC'

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (curValue) {
            sum += curValue.value;
        });

        //Storing the total amount in totals
        data.totals[type] = sum;

    };

    //Create an object to old the data into array

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },

        //Initialize the budget so that we can store the entire budget(inc -exp) in this varibale
        budget: 0,

        //Initialize the percentage so that we can store the percentage of exp in this varibale
        percentage: -1

    };
    //creating a public function to add the itesm
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //Creating new ID based on the existing ID Num
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                ID = 0;
            }

            //Add Items based on EXP or INC
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)

            }
            //after getting the data , push the same in data array
            data.allItems[type].push(newItem);
            //Return the newItem
            return newItem;
        },

        //Creating a function to delete the Item
        deleteItem: function(type, id){
            var ids, index;
            //Now using the map method get the Index of ID which we will pass through the function
            //This return list of ID's in array
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            index = ids.indexOf(id);
            if(index !==-1){
                //if the ID is availbel then using slice method in array delete the ID
                //it accepts 2 args one is the INDEX which needs to be removed and 2nd how elements needs to be removed
                data.allItems[type].splice(index,1);

            }
        },

        calculateBudget: function () {
            //Calulate the Totals of Income and Expense
            //Calling the reusable for calculating the budget
            calculateTotal('exp');
            calculateTotal('inc');

            //Calulating budget Income - Expenses

            data.budget = data.totals.inc - data.totals.exp;

            //Calculating the Percentage
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },
        //Calculate percentages public function

        calculatePercentages: function(){
            //Call the prototype method created for each of the expense using for each method
            data.allItems.exp.forEach(function(curr){
                curr.calPercentages(data.totals.inc);
            });
        },

        //Creating public function to get the percentages

        getPercentage: function(){
            //since we have to return the value here we use MAP, which returns value and stores in variable

            var allPerc = data.allItems.exp.map(function(curr){
                return curr.getPercentage();
            });
            return allPerc;

        },

        //Since ww need to access the Budget Details in Controller Module we need to return those values
        //Using the Return Objects

        getData: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }

        },

        //since the data object is private and cannot be accesed we're creating a return function
        testing: function () {
            console.log(data);
        }



    };





})();



//######## MODUEL 2 UI Related code #################



var UIController = (function () {
    //Now we can provide all the webelements from HTML into an object and we will access from here

    var DOMStrings = {

        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        //The below addBtn element is called in diff Module so we need to return this DOMStrings as Obj
        btnAdd: '.add__btn',

        //for before and end concept to insert the HTML

        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLable: '.budget__expenses--percentage',
        container: '.container',
        expensePercLable: '.item__percentage',
        dateLabel:'.budget__title--month'


    };

    var formatNumber = function(num, type){
        var numSplit,int,dec,type;
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');
        int = numSplit[0];
        if(int.length>3){
            int = int.substr(0,int.length-3)+','+int.substr(int.length-3,3);
        }
        dec = numSplit[1];
        return (type === 'exp' ? '-' : '+')+' '+int + '.'+ dec;

    };

    var nodeListForEach = function(list,callback){
        for(var i=0;i<list.length;i++){
            callback(list[i],i);
        }
    };




    //to access the methods from outside this function we need to return it as an Object
    return {

        //@@@@@@ Return Function -1 @@@@@@@@

        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDesc).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        //@@@@@@ Return Function -2 @@@@@@@@

        addListItem: function (obj, type) {
            //Create the HTML string where we can add the element in UI along with the Data we enter
            //Using placeholder like %id%, %description%, %value% for taking dynamic value
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = `<div class="item clearfix" id="inc-%id%"> <div 
                    class="item__description">%description%</div><div
                    class="right clearfix"><div class="item__value">%value%</div><div 
                    class="item__delete"><button class="item__delete--btn"><i 
                    class="ion-ios-close-outline"></i></button></div></div></div>`;
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;
                html = `<div class="item clearfix" id="exp-%id%">
                    <div class="item__description">%description%</div><div class="right clearfix">
                    <div class="item__value">%value%</div><div class="item__percentage">%percentage%</div>
                    <div class="item__delete"><button class="item__delete--btn">
                    <i class="ion-ios-close-outline"></i></button></div></div></div>`;
            }
            //Replace the Placeholder text with actual data from the input fields using replace methods
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type));
            //newHtml = newHtml.replace('%percentage%',obj.percentage);

            /*Display the values in UI, Insert this into DOM, for this we need take refernce of an existing
            element in DOM and place the HTML before/after that refernce element using
            insertAdjacentHTML method with 2 args 1-> Position(beforebegin/afterbegin/beforeend/afterend)
            2 args-> html string whihc needs to placed
            */
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        //@@@@ Return Function to delete the expense/income in UI

        deletItemList: function(selectorID){
            var el;
            //get the element , this Selctore ID will be passed as an Args in COntroller module
            el = document.getElementById(selectorID);
            //In JS we can remove the element only by using the parent node
            el.parentNode.removeChild(el);

        },

        //@@@@@@ Return Function -3 @@@@@@@@

        clearFields: function () {
            var fileds, fieldsArray;
            //Get all the values from the DOM and it returns List
            fields = document.querySelectorAll(DOMStrings.inputDesc + ',' + DOMStrings.inputValue);
            //But we need to convert the list into array and only then we can clear the fileds 
            //Use Slice method in Array object which returns another Array and apply for each
            //Using for each we  can clear the fileds /set the value to blanl
            fieldsArray = Array.prototype.slice.call(fields)
            //array argument is fieldsArray ;;; current -> currentvalue from the array;;; index ->index num in array

            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        },

        //Reusable functions for displaying the Date and Month on page load
        displayMonth : function(){
            var now, months, month,year;
            
            now = new Date();
            months = ['January' , 'February' ,'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,
                    'September' ,'October' ,'November' ,'December'];
           // months = [January,'February','March','Apr','May','June','July','August','September];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month]+' '+year;
        },

        //Style Manipulations whenev

        changedType : function(){
            //Get the class names which gets impact of the color change
            
            var fields = document.querySelectorAll(DOMStrings.inputType+','+DOMStrings.inputDesc+','+
                            DOMStrings.inputValue);
            //Iterating over NodeListforEach
            nodeListForEach(fields,function(cur){
                cur.classList.toggle('red-focus');           
             });
             //red backgroung for Btn

             document.querySelector(DOMStrings.btnAdd).classList.toggle('red');

        },

        //@@@@@@ Return Function -4 @@@@@@@@

        //Returning the DOMStrings element function so that it can access the 
        getDOMStrings: function () {
            return DOMStrings;
        },

        //To display the percentages in the UI
        displayPercentages: function(percenategs){
            //This will return NodeList -
           var fields =  document.querySelectorAll(DOMStrings.expensePercLable);
           
           nodeListForEach(fields,function(current,index){
            if(percenategs[index]>0){
                current.textContent = percenategs[index] + '%';
            }else{
                current.textContent = '---';
            }
           });

        },

        //@@@ Return Function -5 @@@@@@
        //resubable function to get the Data and Manipulate in DOM
        displayBudget: function (obj) {
            var type;
            obj.budget>0 ? type ='inc' : type ='exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            //to Display the percentage Symbol
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLable).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLable).textContent = '---';
            }

        }
    };

})();



//##############@@@@@@@@@@@@@@ MODULE 3 CONTROLLER @@@@@@@@@@@@@@@@@@###########
//To integrate the 1st and 2nd  modules and pass them as the arguements, GLIBAL APP Controller
var controller = (function (budgetCntrl, appCntrl) {

    //Creatings seperate functions for Event Listeners and returing as Object

       
    var setUpEventListeners = function () {
          //Reusable Functions
        var DOMElements = appCntrl.getDOMStrings();
        //Add Event listener for the button on UI
        document.querySelector(DOMElements.btnAdd).addEventListener('click', cntlAddItem);
        //Add Key press event so that whenever ENTER key is presses, it shouldaccept

        document.addEventListener('keypress', function (event) {
            //Write the condition to execute the code only when the ENTER key is presses
            if (event.keyCode === 13 || event.which === 13) {
                //console.log('Enter key is pressed');
                cntlAddItem();

            }
        });
        //Creating an Event Listener using Event Delegation which triggers Event Bubbling
        document.querySelector(DOMElements.container).addEventListener('click',cntlDeleteItem);

        //Setup the ChangeEvent to change the Background color whenever the user selcts +/-
        document.querySelector(DOMElements.inputType).addEventListener('change',appCntrl.changedType);


    };
   

    
    //Creating a new function to Update the Budget in the UI, this is called whenever we create new item 
    var updateBudget = function () {
        //1.Calculate the Budget
        //Calling the calculate Budget function from BudgetCNtrl Module
        budgetCntrl.calculateBudget();
        //2.Return the Budget
        // Calling the return object creatin for accessing the dat
        var budget = budgetCntrl.getData();
        //3.Display the budget on UI
        appCntrl.displayBudget(budget);

    };
    // Creating reusable function for calculating and updating the Percentages
     var updatePercentages = function(){
         //1.Calculate the percentages 
            //Call the public method created in Budget cntrl module
            budgetCntrl.calculatePercentages();
         //2.Read the percentages from budget controller
            //Call the public method created in Budget Cntrl module
            var percenategs = budgetCntrl.getPercentage();
         //3.Update the UI with new percentages
         appCntrl.displayPercentages(percenategs);
         console.log(percenategs);

     };
    var cntlAddItem = function () {
        /**
         * Activities to be Performed
         * - Get the Input Data
         * - Add the Item to the Budget controller
         * - Add the Item to UI
         * - Clear the fields and shift the focus to the first field
         * - Calculate the Budget
         * - Display the Budget in UI
         */

        // - Get the Input Data
        var inputValues = appCntrl.getInput();
        //console.log(inputValues);
        //console.log('Display from custom function');

        //Execute the below steps only if desc is entered and Value entered is Num/
        //Handling negative validtions using if conditions
        if (inputValues.description !== "" && !isNaN(inputValues.value) && inputValues.value > 0) {
            /*Add the Item to the Budget controller , inputValues.val is getting from inputValues from UI 
            and passing the same to the Bugdet Cntrl function and Add Item Method
            This will return a array of elements so store it in a variable*/

            var newItem = budgetCntrl.addItem(inputValues.type, inputValues.description, inputValues.value);

            //- Add the Item to UI
            appCntrl.addListItem(newItem, inputValues.type);

            //Clear the fields and shift the focus to the first field
            appCntrl.clearFields();

            //Calling the UpdateBudget Methds
            updateBudget();

            //calling the method to displaye updated percentages
            updatePercentages();

        }
    };

    //Creating the Delete Item reusable function using DOM Traverse and String Split
    var cntlDeleteItem = function(event){
        var itemID,splitID;
        //traversing through the DOM and get the Element ID which the action has to be performed
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //console.log(itemID);
        if(itemID){

            //Spilt the ID from the HTML, since HTML ID's are inc-0, exp-0 in addListItem FUnction
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseFloat(splitID[1]);
            //call the resuable method created in budgetCntrl Module to delete ITEM
            budgetCntrl.deleteItem(type,ID);

            //Display it in UI after removing the Item
            appCntrl.deletItemList(itemID);

            //Update the amount/expenses

            updateBudget();

            //calling the method to displaye updated percentages
            updatePercentages();
           

        }

    };


    //Now to access the Event Listeners functions we need to return the object and access it

    return {
        init: function () {
            console.log("Access Event Listener func")
            appCntrl.displayMonth();
            //reset the every Value to 0 when the UI is loaded
            appCntrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();