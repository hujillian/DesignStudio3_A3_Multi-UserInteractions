// Goal: collect all the chickens
// the other animals cannot be collected
'use strict'
let timeTaken = 0.0;

AFRAME.registerComponent('collaborative',{

    init : function(){
        //create 20 animals initially
        for (let i = 0; i < 20; i ++){
            spawnAnimal("collaborative");
        }
    },

    tick: function (time, timeDelta) {
        if (numChickensCollected == numChickens){
            timeTaken = Math.round((time-startTime)/1000);
            console.log("game over");

            document.querySelector('#user-gesture-overlay').style.display = 'block';
            document.querySelector('#game-over-text').style.display = 'block';

            numChickens = 0;
        }
    }

});