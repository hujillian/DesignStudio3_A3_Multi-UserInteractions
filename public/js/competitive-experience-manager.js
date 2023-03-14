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
                socket.emit('get-score-comp', user1Points);
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

        // handle the score from the other user
        socket.on('send-score-comp', (data) => {
            socket.emit('game-end-comp', {score1:user1Points, score2:data});
        });

        // end game
        socket.on('display-score-comp', (data) => {
            

            // Winner is decided based on the points
            if(data.score1 == data.score2){
                document.querySelector('#score-h').innerHTML = "Tie";
            }
            else if(data.score2 > data.score1){
                document.querySelector('#score-h').innerHTML = "You Win!";
            }
            else{
                document.querySelector('#score-h').innerHTML = "You lost";
            }
            document.querySelector('#score-p1').innerHTML = "Your Score: " + data.score2;
            document.querySelector('#score-p2').innerHTML = "Opponent's Score: " + data.score1;

            document.querySelector('#game-over-text').style.display = 'none';
            document.querySelector('#score-text').style.display = 'block';
            
            game = false;
        });
    }
});