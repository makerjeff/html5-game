// socket-play server 2017.12.29

const app           = require('express')();
const express       = require('express');
const http          = require('http').Server(app);
const io            = require('socket.io')(http);      // socket.io REQUIRED.
const chalk         = require('chalk');
const body_parser   = require('body-parser');
const clear         = require('clear');
const Canvas        = require('canvas');

const get_lift      = require('./modules/get_lift');

// middleware
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// canvas composite
var canvas = new Canvas(640,480);
var ctx = canvas.getContext('2d');


// client object.
let client_list = {ids: [], objects: []};
let room_list = [];

// // TODO: restructure to rooms object, registering each client as a 'player' or 'game'
// let room_schema = {
//     roomCode: 'ABCD',
//     game: '(socket.id string)', //only one available
//     players: ['(socket.id string)', '(socket.id string)', '(socket.id string)']
// };

let game_waiting = false;
let current_pinger = '';


// socket.io
// when a user connects...
io.on('connection', function(socket) {

    // server log output
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

    // PING PING
    socket.on('_ping', function(data) {

        if (!game_waiting) {
            game_waiting = true;
            current_pinger = socket.id;

            io.emit('game_hold', {who: socket.id});


            // get a lift
            get_lift.get_lift(3000).then(function(val) {
                console.log('fulfilled.');

                var payload = {lift: val, who: current_pinger};

                // TODO: emit to room.
                io.emit('game_message', payload);

                // reset
                game_waiting = false;
                current_pinger = '';

            }, function(reason){
                console.log(reason);
            });

        } else {
            console.log(`${current_pinger} has already pressed the button.`);
        }
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

// routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/client-view.html');
});

app.get('/clients', (req, res) => {
    res.send(client_list);
});

// for composite color test
app.get('/composite/:color', function(req, res) {
    console.log(req.params.color);
    var payload = {status: 'success', payload: {message: 'data successfully requested for: ' + req.params.color, data: canvas_spit(ctx, req.params.color)}};
    res.json(payload);
});

// fallthrough
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

// spit something out on canvas
function canvas_spit(context, color) {
    context.save();
    context.beginPath();
    context.fillStyle = color || 'black';
    context.rect(0,0, canvas.width, canvas.height);
    context.fill();
    context.closePath();
    context.restore();
    console.log('returning color: ' + color);
    // return low quality jpg.
    return canvas.toDataURL('image/png', 0.1);
}