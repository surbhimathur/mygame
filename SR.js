var current_score,active_player,global_score,game_playing;

init();


//roll button coding
document.querySelector('.roll').addEventListener('click',function(){
    
    if(game_playing){   
    var dice_number,dice_stat;
    dice_number= Math.floor(Math.random()*6) + 1 ;   //generate random number
    
    dice_stat= document.querySelector('.dices');
    document.querySelector('.dices').style.display= 'block';
    dice_stat.src='dice'+ dice_number + '.png';                //display dice number
    
    if(dice_number!==1){
        current_score = current_score + dice_number;
        document.querySelector('.score' + active_player).textContent=current_score;
    }
    else{
        next_player();
         alert('You Roll up 1 . Next Player Chance');
       
    }
    
    }
     
});



//hold button coding
document.querySelector('.hold').addEventListener('click',function(){
    
    if(game_playing){
      //update global score
    global_score[active_player]= global_score[active_player]+current_score;
    document.querySelector('.global-score-' + active_player).textContent= global_score[active_player];
   
    //who wins the game
    if(global_score[active_player]>=100){
       // document.querySelector('.dices').style.display='none';
        document.querySelector('#p-' + active_player).textContent= 'WINNER';
         document.querySelector('.player-' + active_player).classList.remove('active');
        document.querySelector('.player-' + active_player).classList.add('winner'); 
        document.querySelector('.global-score-' + active_player).textContent= '100';
      document.querySelector('.score0').textContent='0';
      document.querySelector('.score1').textContent='0';
        document.querySelector('.character').style.display='block';
        game_playing= false;
    }
    
    else{
         next_player();
         document.querySelector('.dices').src= 'dise' + '.png';
    }  
    }
      
});


// new game button
document.querySelector('.new-game').addEventListener('click',init);


//page load 
function init(){
   current_score=0;
   active_player=0;
   global_score=[0,0];
    game_playing=true;
    
    
       document.querySelector('.dices').src= 'dise' + '.png';
       document.querySelector('.global-score-0').textContent='0';
       document.querySelector('.global-score-1').textContent='0';              // setting all scores to 0
       document.querySelector('.score0').textContent='0';
       document.querySelector('.score1').textContent='0';

    
       document.querySelector('.character').style.display='none';
     document.querySelector('#p-0').textContent= 'Player 1';
     document.querySelector('#p-1').textContent= 'Player 2';
     document.querySelector('.player-0').classList.remove('active');
     document.querySelector('.player-1').classList.remove('active');
     document.querySelector('.player-0').classList.remove('winner');
     document.querySelector('.player-1').classList.remove('winner');
     document.querySelector('.player-0').classList.add('active');
    
    
    
}

function next_player(){
        document.querySelector('.score' + active_player).textContent='0';
        active_player=== 0 ? active_player = 1 : active_player = 0;
        current_score=0;
          
      document.querySelector('.player-0').classList.toggle('active');
      document.querySelector('.player-1').classList.toggle('active');
}


//rules to play
document.querySelector('.rules').addEventListener('click',function(){
    alert('1. To Start game click on "Roll Dice" button.\n 2. As player roll dice the numbers will be added to current score in "Current box" like if player roll 3, then current box will display 3, then again player roll 5, then 5 will be added to previous rolled number 3 & total will be 8.\n 3. One player can roll dice as many times as he wants till number "1" doesnt comes. If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the dice to the next player.\n 4. To save your score player can click on "Hold" button. The total score will be saved & displayed.\n 5. The first player to accumulate 100 or more points wins the game.\n 6. Click on new game button to start a game! Enjoy :) '  );
});


















