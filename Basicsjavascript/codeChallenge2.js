var johnTeamscr1 = 89;
var johnTeamscr2 = 151;
var johnTeamscr3 = 103;
var mikeTeamscr1 = 116;
var mikeTeamscr2 = 94;
var mikeTeamscr3 = 123;

var maryTeamscr1 = 47;
var maryTeamscr2 = 134;
var maryTeamscr3 = 105;

var johnAvgScr = (johnTeamscr1+johnTeamscr2+johnTeamscr3)/3;
var mikeAvgScr = (mikeTeamscr1+mikeTeamscr2+mikeTeamscr3)/3;
var maryAvgScr = (maryTeamscr1+maryTeamscr2+maryTeamscr3)/3;

console.log('John\'s team average score '+johnAvgScr);
console.log('Mike\'s team average score '+mikeAvgScr);
console.log('Mary\'s team average score '+maryAvgScr);
if(johnAvgScr>mikeAvgScr){
    console.log('John\'s team won the game with highest average score of '+johnAvgScr);
}else if(johnAvgScr===mikeAvgScr){
    console.log('Both team\'s have same average score '+johnAvgScr+' so match is drawn');
}else{
    console.log('Mike\'s team won the game with highest average score of '+mikeAvgScr);
}

console.log('@@@@@@@@@@@@@@@@@@');

if(johnAvgScr>mikeAvgScr && johnAvgScr>maryAvgScr){
    console.log('John\'s team won the game with highest average score of '+johnAvgScr);
}else if(johnAvgScr>mikeAvgScr && johnAvgScr<maryAvgScr){
    console.log('Mary\'s team won the game with highest average score of '+maryAvgScr);
}else if(johnAvgScr< mikeAvgScr && mikeAvgScr>maryAvgScr){
    console.log('Mike\'s team won the game with highest average score of '+mikeAvgScr);
}else if(johnAvgScr< mikeAvgScr && mikeAvgScr<maryAvgScr){
    console.log('Mary\'s team won the game with highest average score of '+maryAvgScr);
}

else{
    console.log('Match is drawn');
}
