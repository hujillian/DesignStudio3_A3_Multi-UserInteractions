'use strict'

AFRAME.registerComponent('collect-item-collaborative',{


    init : function(){

            const THIS_COMPONENT = this;

            THIS_COMPONENT.el.addEventListener('click', function(){
                
                // if the object is within a set distance of the camera
                if(objDistance(THIS_COMPONENT.el, 3.5)){
                    // if the object is a chicken
                    if(THIS_COMPONENT.el.className=="interactive chickens"){
                        //chicken sound
                        document.querySelector('#chicken-sound').components.sound.playSound();
                        numChickensCollected += 1;
                        console.log("You caught a chicken!");
                        // remove the object from the scene
                        THIS_COMPONENT.el.parentNode.removeChild(THIS_COMPONENT.el);
                    }
                    // else if the object is a goose
                    else if(THIS_COMPONENT.el.className=="interactive geese"){
                        // goose sound
                        document.querySelector('#goose-sound').components.sound.playSound();
                    }
                    // else (goat)
                    else {
                        // goat sound
                        document.querySelector('#goat-sound').components.sound.playSound();
                    }
                }
                    
            });

    },

});