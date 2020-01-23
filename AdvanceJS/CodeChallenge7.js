/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/* @@@@@@@@@@@@@ Implementing Point 7 @@@@@@@@@@@@@@
- Using IIFE we need to encapuslate the entire code in the IIFE, so that when other users want to reuse
- our code and if there are any same methods or varibales the it wont be code 
- since IMMEDIATELY INVOKED FUNTION EXPRESSION(IIFE) ensures data privacy
- Syntac (function(//If any agruments ){//Code Inside })(If any Arguements);
*/

(function(){
    //Creating a Constructor with 3 Arguments
    function Question(question,answer,correctAnswer){
    this.question= question;
    this.answer= answer;
    this.correctAnswer= correctAnswer;
    }

//Now creating teh question by invoking the Question constructor and storing in a variable, options in an array
var question1 = new Question("Are you studying JavaScript?",['Yes', 'No', 'NotSure'], '0');
var question2 = new Question("Is Javscript Client side language?",['Yes', 'No', 'NotSure'], '1');
var question3 = new Question("Is JavaScript most preferred Language?",['Yes', 'No', 'NotSure'], '2');

//Select the random Question using math.random Method & it should be less as per the num of questions

var questions = [question1,question2,question3];
var quesNum = Math.floor(Math.random()*questions.length);

//Now create a method to display the question and options using prototype
Question.prototype.displayQuestion = function(){
    console.log(this.question)
        for(var i =0; i<this.answer.length;i++){
            console.log(i+ ":" +this.answer[i]);
        }
    }

//Now calling the questions using prototype function
questions[quesNum].displayQuestion();

//Now show a prompt to get the answer an store in variable

var answer = prompt("Please enter the correct answer:");
//Now display the correct Answer create a method using prototype change for correct answer
Question.prototype.checkAnswer = function(answer){

    if(answer===this.correctAnswer){
        console.log("Correct Answer! :)")
    }else{
        console.log("Incorrect Answer, Please try again!")
    }

}

//Now call the prototype to display the correct answer
questions[quesNum].checkAnswer(answer);

})();

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


