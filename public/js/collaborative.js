// Goal: collect all the chickens
// the other animals cannot be collected
// when done, you can see how long it took you
'use strict'

AFRAME.registerComponent('collaborative',{

    init : function(){
        //create 30 animals initially
        for (let i = 0; i < 30; i ++){
            spawnAnimal("collaborative");
        }
    },

    tick: function (time, timeDelta) {
        if (numChickensCollected == numChickens){
            console.log("game over");

            document.querySelector('#game-over-p1').innerHTML = "You collected " + numChickens + " chickens in " + Math.round((time-startTime)/1000) + " seconds!";
            document.querySelector('#user-gesture-overlay').style.display = 'block';
            document.querySelector('#game-over-text').style.display = 'block';

            numChickens = 0;
        }
    }

});