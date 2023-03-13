let user1Points = 0;
let user2Points = 0;
let game = true;

// You have 1 minute to collect
// When you collect one animal, another one will be spawned
// At the end, the user with the most points wins

'use strict'

AFRAME.registerComponent('competitive',{

    init : function(){
        // create 15 animals initially
        for (let i = 0; i < 15; i ++){
            spawnAnimal("competitive");
        }
    },


    tick: function (time, timeDelta) {
        // if 1 minute has passed
        if ((time-startTime) >= 60000 && game){
            console.log("game over");

            // Winner is decided based on the points
            if(user1Points == user2Points){
                document.querySelector('#game-over-h').innerHTML = "Game over: Tie";
            }
            else if(user1Points > user2Points){
                document.querySelector('#game-over-h').innerHTML = "Game over: User1 Wins!";
            }
            else{
                document.querySelector('#game-over-h').innerHTML = "Game over: User2 Wins!";
            }

            document.querySelector('#game-over-p1').innerHTML = "User1 Score: " + user1Points;
            document.querySelector('#game-over-p2').innerHTML = "User2 Score: " + user2Points;

            document.querySelector('#user-gesture-overlay').style.display = 'block';
            document.querySelector('#game-over-text').style.display = 'block';

            game = false;
        }
    }

});