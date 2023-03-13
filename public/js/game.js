let numChickens = 0;
let numChickensCollected = 0;
 
 // see if the object is within a desired distance from the camera
const objDistance = function(obj, distance){ 
    let objPos = obj.getAttribute('position');
    let cameraPos = document.querySelector('#camera').getAttribute('position');

    // Find a new position for the object based on the vector from the camera's position to the object's current position
    let vectCamToItem = [objPos.x - cameraPos.x, objPos.y - cameraPos.y, objPos.z - cameraPos.z];
    let magCamToItem = Math.sqrt(Math.pow(vectCamToItem[0], 2) + Math.pow(vectCamToItem[1], 2) + Math.pow(vectCamToItem[2], 2));
    
    if (magCamToItem <= distance){
        return true;
    }

    return false;
    
}

// create a new animal entity of random animal type (chicken, goose, or goat)
const spawnAnimal = function(mode){

    // scene
    var sceneEl = document.querySelector('a-scene');

    // new animal entity
    var newAnimal = document.createElement('a-entity');
    // new random position from -5 to 5 for x and z values
    let randomPos = [(Math.floor(Math.random() *10 - 5)), 0, (Math.floor(Math.random() *10 - 5))];
    newAnimal.setAttribute('position', randomPos[0] + " " + randomPos[1] + " " + randomPos[2]);

    // add the collaborative or competitive component
    if(mode == "collaborative"){
        newAnimal.setAttribute('collect-item-collaborative', '');
    }
    else if(mode == "competitive"){
        newAnimal.setAttribute('collect-item-competitive', '');
    }


    // to choose which type of animal will be spawned
    // we want a higher probability of creating a chicken, and a lowest probability for creating a goat
    let type = Math.floor(Math.random() * 6);

    // if 0, create a goat
    if (type == 0){
        newAnimal.setAttribute('class', 'interactive goats');
        newAnimal.setAttribute('scale', '1 1 1');
        newAnimal.setAttribute('gltf-model', '#goat-file');
        newAnimal.setAttribute('wander', 'countValue:1200;');

        console.log("goat spawned");
    }
    // if 1 or 2, create a goose
    else if (type == 1 || type == 2){
        newAnimal.setAttribute('class', 'interactive geese');
        newAnimal.setAttribute('scale', '0.35 0.35 0.35');
        newAnimal.setAttribute('gltf-model', '#goose-file');
        newAnimal.setAttribute('wander', '');

        console.log("goose spawned");
    }
    // otherwise, create chicken
    else{
        newAnimal.setAttribute('class', 'interactive chickens');
        newAnimal.setAttribute('scale', '0.25 0.25 0.25');
        newAnimal.setAttribute('gltf-model', '#chicken-file');
        newAnimal.setAttribute('wander', '');

        console.log("chicken spawned");
        numChickens += 1;
    }
    
    // add entity to scene
    sceneEl.appendChild(newAnimal);
    
}