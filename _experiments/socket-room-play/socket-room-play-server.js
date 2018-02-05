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
    // res.send('<h1>Hello world </h1>');
    res.sendFile(__dirname + '/public/index-3.html');
});

// client object.
let client_list = {ids: [], objects: []};



// socket.io
io.on('connection', function(socket) {
    console.log(`a user with the id ${chalk.blue(socket.id)} has connected.`);
    client_list.ids.push(socket.id);
    client_list.objects.push({id: socket.id, name: ''});



    // socket events
    socket.on('disconnect', function() {
        console.log(`user ${chalk.red(socket.id)} disconnected. `);


        // remove from client list logic
        let target_index = client_list.ids.indexOf(socket.id);
        console.log(`Removing ${chalk.red(socket.id)} from client list at position ${target_index}`);
        client_list.ids.splice(target_index, 1);
        client_list.objects.splice(target_index, 1);

        // announce client departure

    });


    // room connection
    socket.on('room', (room) => {
        socket.join(room);
        console.log(`${chalk.blue(socket.id)} joined room ${chalk.green(room)}`);

        io.sockets.in(room).emit('message', `Welcome ${socket.id} to the room!`);

        //TO ROOM
        // io.sockets.in(room).emit('message', `Welcome to room ${room}`);
    });


    let room = 'abc123';

    // EMIT TO ROOM
    // io.sockets.in(room).emit('message', 'what is up, party peoples?');
    // io.sockets.in('foobar').emit('message', 'this should go to no one.');

    // direct message to connector
    io.to(socket.id).emit('message', 'private message sent only to connector. your ID is ' + socket.id);

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