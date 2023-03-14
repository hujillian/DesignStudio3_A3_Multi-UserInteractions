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
        if ((time - startTime) >= 30000 && game){
            console.log("game over");

            document.querySelector('#user-gesture-overlay').style.display = 'block';
            document.querySelector('#game-over-text').style.display = 'block';

            game = false;
        }
    }

});