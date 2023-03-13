'use strict'

AFRAME.registerComponent('collect-item-competitive',{


    init : function(){

            const THIS_COMPONENT = this;

            THIS_COMPONENT.el.addEventListener('click', function(){
                
                // if the object is within a set distance of the camera
                if(objDistance(THIS_COMPONENT.el, 3.5)){
                    // if the object is a chicken
                    if(THIS_COMPONENT.el.className=="interactive chickens"){
                        document.querySelector('#chicken-sound').components.sound.playSound();
                        // add 10 points
                        user1Points += 10;
                        console.log("You caught a chicken: +10 points");
                    }
                    // else if the object is a goose
                    else if(THIS_COMPONENT.el.className=="interactive geese"){
                        document.querySelector('#goose-sound').components.sound.playSound();
                        // minus 5 points
                        user1Points -= 5;
                        console.log("You caught a goose: -5 points");
                    }
                    // else (goat)
                    else {
                        document.querySelector('#goat-sound').components.sound.playSound();
                        // minus 5 points
                        user1Points -= 5;
                        console.log("You caught a goat: -5 points");
                    }

                    // remove the object from the scene
                    THIS_COMPONENT.el.parentNode.removeChild(THIS_COMPONENT.el);
                    
                    // spawn a new animal 
                    spawnAnimal("competitive");
                }
                    
            });

    },

});

