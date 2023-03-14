AFRAME.registerComponent('experience-manager', {
    init: function () {
        let socket = io();

        socket.on('connect', (userData) => {
            console.log("I exist!");

            document.querySelector('#user-gesture-button').addEventListener('click', function(){
                console.log("game started");
                socket.emit('game-start');
            });

            document.querySelector('#see-score-button').addEventListener('click', function(){
                socket.emit('get-score-collab', numChickensCollected);
                
            });


        });

        // start the game
        socket.on('start-game', (data) => {
            // hide overlay/button
            document.querySelector('#user-gesture-button').style.display = 'none';
            document.querySelector('#instructions').style.display = 'none';
            document.querySelector('#user-gesture-overlay').style.display = 'none';
            
            startTime = document.querySelector('a-scene').time;

            // find all, loop through, and start ambient sounds
            const ambientSounds = document.querySelectorAll('.ambient-music');
            ambientSounds.forEach(function(soundEntity){
                soundEntity.components.sound.playSound();
            });
        });

        socket.on('send-score-collab', (data) =>{
            socket.emit('game-end-collab', {num1:data, num2:numChickensCollected})
        });

        // end game
        socket.on('display-score-collab', (data) => {
            document.querySelector('#score-h').innerHTML = "Together you collected " + data + " chickens!";
            document.querySelector('#game-over-text').style.display = 'none';
            document.querySelector('#score-text').style.display = 'block';
        });

    }


});