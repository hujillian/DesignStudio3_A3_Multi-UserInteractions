AFRAME.registerComponent('experience-manager', {
    init: function () {
        let socket = io();

        socket.on('connect', (userData) => {
            console.log("I exist!");

            document.querySelector('#user-gesture-button').addEventListener('click', function(){
                console.log("game started");
                socket.emit('gametart');
            });

            // let interactiveItems = document.querySelectorAll('.interactive');

            // for(let i = 0; i < interactiveItems.length; i++)

            //     interactiveItems[i].addEventListener('click', function(){
                    
            //         // if the object is within a set distance of the camera
            //         if(objDistance(interactiveItems[i], 3.5)){
            //             // if the object is a chicken
            //             if(interactiveItems[i].className=="interactive chickens"){
            //                 // chicken sound
            //                 document.querySelector('#chicken-sound').components.sound.playSound();
            //                 numChickensCollected += 1;
            //                 console.log("You caught a chicken!");
            //                 // remove the object from the scene
            //                 interactiveItems[i].parentNode.removeChild(interactiveItems[i]);
            //             }
            //             // else if the object is a goose
            //             else if(interactiveItems[i].className=="interactive geese"){
            //                 // goose sound
            //                 document.querySelector('#goose-sound').components.sound.playSound();
            //             }
            //             // else (goat)
            //             else {
            //                 // goat sound
            //                 document.querySelector('#goat-sound').components.sound.playSound();
            //             }
            //         }
            //     });

        });

        //listen to event from server
        socket.on('initial-spawn', (data) => {
            
        });
    }


});