// let the animal wander randomly in the environment
'use strict'

AFRAME.registerComponent('wander',{

    schema:{
        countTime: {type:'number', default: 0},
        countValue: {type:'number', default: 1000}
    },

    tick: function (time, timeDelta) {
        
        this.data.countTime += timeDelta;
        if(this.data.countTime >= this.data.countValue){
            let newPos = randomMovement(this.el.getAttribute('position'));
            this.el.setAttribute('animation', "property: position; to: "+ newPos[0] + " " + newPos[1] + " " + newPos[2] + "; dur: " + this.data.countValue + "; easing: linear;")
            this.data.countTime = 0;
        }
    }

});

const randomMovement = function(animalPos){
    // random new position for x and z values: add a value between -2 and 2
    let pos = [animalPos.x + (Math.floor(Math.random()*3)-1)*2, 0, animalPos.z + (Math.floor(Math.random()*3)-1)*2];

    // don't let it move out of the bounds of the plane
    if (pos[0] < -15){
        pos[0] = -15;
    }
    else if (pos[0] > 15){
        pos[0] = 15;
    }

    if (pos[2] < -15){
        pos[2] = -15;
    }
    else if (pos[2] > 15){
        pos[2] = 15;
    }

    return pos;
}