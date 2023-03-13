AFRAME.registerComponent('experience-manager', {
    init: function () {
        let socket = io();

        socket.on('connect', (userData) => {
            console.log("I exist!");

            
                
        });
    }
});