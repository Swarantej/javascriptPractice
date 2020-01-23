/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change 
the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript.
This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//Declaring Global Variables
    var scores,roundScore,activePlayer,dice,gamePlaying,lastDice;

//Creating a reusable function to reset all the scores and CSS Styles
    function init(){
        scores=[0,0];
        roundScore=0;
        activePlayer=0;
        gamePlaying=true;
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.getElementById('score-0').textContent='0';
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.getElementById('name-0').textContent= 'Player 1';
        document.getElementById('name-1').textContent= 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }

//Calling the Reusbale Function initially
    init();

//Click on roll Dice button and adding Event Listener as Anonymous functions and its functionality
    document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    dice1 =Math.floor(Math.random()*6)+1;
    dice2 =Math.floor(Math.random()*6)+1;


    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
   
    
    document.getElementById('dice-1').src= 'dice-'+dice1+'.png';
    document.getElementById('dice-2').src= 'dice-'+dice2+'.png';
        if(dice1!==1 & dice2!==1){
            roundScore += dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;

        }else{
            nextPlayer(); 
        }

       /* if(dice!==1){
            if( dice ===6 && lastDice===6){
                scores[activePlayer]= 0;
                document.getElementById('score-'+activePlayer).textContent='0';
                nextPlayer();
            }
            else{
                roundScore+= dice;
                document.querySelector('#current-'+activePlayer).textContent = roundScore;
            }
            
        }else{
            nextPlayer();
        }
        lastDice= dice;
        console.log(lastDice);*/
    } 
});

//Click on HOLD button and adding Event Listener as Anonymous functions and its functionalty
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    scores[activePlayer] += roundScore;
    var input = document.querySelector('.final-score').value;
    if(input){
        var winningScore = input;
    }else{
        winningScore=20;
    }

    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>winningScore){
        document.querySelector('#name-'+activePlayer).textContent='WINNER!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
        }else{
        nextPlayer();
        }
    }
});

//Creating a reusbale function for the common components to change the player
function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
        roundScore=0;
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.getElementById('dice-1').style.display = 'none';
        //document.getElementById('dice-2').style.display = 'none';

};

//Click on NEW GAME button and calling call back function which is in reusable function
document.querySelector('.btn-new').addEventListener('click',init);


