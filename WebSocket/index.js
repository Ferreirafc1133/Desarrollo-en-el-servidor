const express = require('express');
//const ws = require('ws');
const socketio = require('socket.io');


const port =  process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(port, () => {
    console.log('Server running on port'+ port);
});



// const websocket = new ws.WebSocketServer({
//     server
// });
// websocket.on('connection', (socket) => {
//     console.log('Client connected');

//     socket.send('Te conectaste. Bien echo');

//     socket.on('message', (message) => {
//         console.log('Received message:'+ message);
//         socket.send("hola puto");
//     });

// });


const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (data) => {
        console.log('Received message:'+ data);
        socket.emit('onesClick', 'hola puto');
    });
    socket.on('counter', (data) => {
        console.log('Received counter:'+ data);
        socket.broadcast.em('counter', data);

    });
});


