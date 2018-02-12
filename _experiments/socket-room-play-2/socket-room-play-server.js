// socket-play server 2017.12.29

const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);      // socket.io REQUIRED.
const chalk = require('chalk');
const body_parser = require('body-parser');
const clear = require('clear');

// middleware
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/client-view.html');
});

// client object.
let client_list = {ids: [], objects: []};
let room_list = [];

// TODO: restructure to rooms object, registering each client as a 'player' or 'game'

let room_schema = {
    roomCode: 'ABCD',
    game: '(socket.id string)', //only one available
    players: ['(socket.id string)', '(socket.id string)', '(socket.id string)']
};


// socket.io
// when a user connects...
io.on('connection', function(socket) {

    // let user know they've connected...
    console.log(`A user with the id ${chalk.blue(socket.id)} has connected.`);

    console.log(`Adding ${chalk.blue(socket.id)} to client list at position ${client_list.ids.length}`);

    // update client_list
    client_list.ids.push(socket.id);
    client_list.objects.push({id: socket.id, name: ''});




    // when a user disconnects...
    socket.on('disconnect', function() {
        console.log(`User ${chalk.red(socket.id)} disconnected. `);

        // remove from client list logic
        let target_index = client_list.ids.indexOf(socket.id);
        console.log(`Removing ${chalk.red(socket.id)} from client list at position ${target_index}`);

        client_list.ids.splice(target_index, 1);
        client_list.objects.splice(target_index, 1);

    });


    // room connection
    socket.on('room', (room) => {

        //TODO: check to see if room is available
        if (check_room(room)) {

        }


        // TODO: if room exists, join it.

        // TODO: else, send direct message back to socket

        socket.join(room);
        console.log(`${chalk.blue(socket.id)} joined room ${chalk.green(room)}`);

        io.sockets.in(room).emit('message', `Welcome ${socket.id} to the room!`);

    });


    // let room = 'abc123';

    // EMIT TO ROOM
    // io.sockets.in(room).emit('message', 'what is up, party peoples?');
    // io.sockets.in('foobar').emit('message', 'this should go to no one.');


});


app.get('/clients', (req, res) => {
    res.send(client_list);
});

//
app.use(express.static('public/'));


// start server
http.listen(3000, function() {
    clear();
    console.log('listening on localhost:3000');
});



// ---- HELPER FUNCTIONS ----
function check_room(room) {

    let index = room_list.indexOf(room);

    if (index < 0) {
        console.log('no room found. ');
        return null;

    } else {
        console.log('room found at index ' + index);
        return index;
    }
}