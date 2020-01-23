/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

    var scores,roundScore,activePlayer,dice,gamePlaying;
    init();
/*//Generating random number for dice
    dice =Math.floor(Math.random()*6)+1;
    console.log(dice);

//Now manipulating the DOM to add the score generate from DICE
    document.querySelector('#current-'+activePlayer).textContent = dice;*/

//We can also use another method called InnerHTML to manipulate the DOM insted on textContent.
    //document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>';

//To read the data from DOM we can use below methods
    var score = document.querySelector('#score-0').textContent;
    console.log(score);







//Now we need to add the Click event for roll button using AddEventListener Function(it accepst 2 args,)
//1st asr is event to perform and 2nd arg the action to perform after event
//So action to perform after clicking the button can we written is seperate fun and call it as 'CALL BACK FUNC"
//Else we can directly write the function in place of arg2 and call as "ANONYMUS FUNCTION"

document.querySelector('.btn-roll').addEventListener('click',function(){
//Adding this gamePlaying condition to True/False to restrict  button actions the Play after the player winns
    if(gamePlaying){
        //when the button is click we need to display teh random number
    dice =Math.floor(Math.random()*6)+1;

    //As per the dice we need to change theimages in the DOM

    //Block is to display the 
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    //Now change the image as per the dice using the src attribute in HTML
    diceDOM.src= 'dice-'+dice+'.png';

    //We need to  switch the player if the Dice is 1 , we have to add the dice score if it's other than 1
    if(dice!==1){
        roundScore+= dice;
        //update the same score to display under current round score in UI
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }

    }
    
});


//Below method is click on Hold button and action to be performed after hold button click
document.querySelector('.btn-hold').addEventListener('click',function(){
//Adding this gamePlaying condition to True/False to restrict  button actions the Play after the player winns
    if(gamePlaying){
//update the current round score to Globale score

scores[activePlayer] += roundScore;
//Display the same Globale score in UI

document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
//Check if the player is winner if Score>100
if(scores[activePlayer]>20){
    //Display the player Name with WINNER!
    document.querySelector('#name-'+activePlayer).textContent='WINNER!';
    //Remove th dice
    document.querySelector('.dice').style.display = 'none';
    //Now apply the style setting slike WINNER in Bold and remove the red dot
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying=false;
}else{
    //Change to next playre
    nextPlayer();
}
    }
    

});


//Create the Reusable function of chaging the player 

function nextPlayer(){
    //if the dice score is ==1, then change the player
        activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
        //reset the current round score = 0;
        roundScore=0;
        //Reset the current score for the player to 0 when the dice =0
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        //Once the Dice =1 change the player using the CSS Selector Toggle to displaye active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Once the Dice ==1, remove the dice image
        document.querySelector('.dice').style.display = 'none';

};

//Creating an action when the user click on NEW BUTTON in UI

document.querySelector('.btn-new').addEventListener('click',init);

//Creating an reusable function to reset the UI , Player details, Scores and active player styles

function init(){

    //Declaring the varibale before the game and after clicking the New Button
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    //On initial page Load the dice images should be displayed as Blank,so we have set Display content = None
    //It is CSS Style method
    document.querySelector('.dice').style.display = 'none';

    //set all teh score to 0
    //Initially we have set all the scores to 0, we will achieve this by accessing element by GetELementByID
    //We can also use query selctor but if ID is present then getElementByID is faster
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    //Now reset player details remove WINNER and reset to Player 1 and Player 2
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent= 'Player 2';
    //Reset the styles and active player details remove the WINNER class style and active class style
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //now add the Player 1 as active as by default he is the active player
    document.querySelector('.player-0-panel').classList.add('active');


}

