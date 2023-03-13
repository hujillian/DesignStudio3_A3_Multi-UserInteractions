// Libraries
const express = require('express'); 
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const LISTEN_PORT = 8080;

// create our routes
app.get('/', function(req, res){
    res.sendFile('index.html', {root:__dirname + '/public/'})
});
app.get('/collaborative', function(req, res){
    res.sendFile('collaborative.html', {root:__dirname + '/public/'})
});
app.get('/competitive', function(req, res){
    res.sendFile('competitive.html', {root:__dirname + '/public/'})
});

// websockets 
io.on('connection', (socket) =>{ 
    console.log(socket.id + " is connected!"); // when someone connects to the network

    socket.on('disconnect', () =>{ // when someone disconnects from the network
        console.log(socket.id + " is disconnected.");
    });

    // our custom websocket events
    socket.on('game-start', (data =>{
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
    }));
    
    socket.on('caught-chicken', (data =>{
        console.log("Caught a chicken");
        io.emit('chicken-caught', {r:255, g:0, b:0}) // instead of having the colour, we can include any type of data
    }));

    socket.on('blue', (data =>{
        console.log("blue event received.");
        io.emit('color_change', {r:0, g:0, b:255})
    }));
});
// socket emit functionalities/uses: https://socket.io/docs/v4/emit-cheatsheet/

// set middleware
app.use(express.static(__dirname + '/public'));

// start server
server.listen(LISTEN_PORT);
console.log('Listening to port: ' + LISTEN_PORT);