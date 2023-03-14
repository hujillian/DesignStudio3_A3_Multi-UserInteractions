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

    
    socket.on('game-start', (data =>{
        // start the game for both users at the same time
        io.emit('start-game', {});
    }));

    socket.on('get-score-collab', (data =>{
        socket.broadcast.emit('send-score-collab', data);
    }));

    socket.on('game-end-collab', (data =>{
        socket.broadcast.emit('display-score-collab', (data.num1 + data.num2));
    }));

    socket.on('get-score-comp', (data =>{
        socket.broadcast.emit('send-score-comp', data);
    }));

    socket.on('game-end-comp', (data =>{
        socket.broadcast.emit('display-score-comp', (data));
    }));

    
});

// set middleware
app.use(express.static(__dirname + '/public'));

// start server
server.listen(LISTEN_PORT);
console.log('Listening to port: ' + LISTEN_PORT);