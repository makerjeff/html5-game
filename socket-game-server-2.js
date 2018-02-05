// socket-game-server-2

const app       = require('express')();
const http      = require('http').Server(app);
const io        = require('socket.io')(http);
const chalk     = require('chalk');


let data_pack   = {player: null, payload: {}};


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/socket-game-2/public/index.html');
});

// socket.io setup
io.on('connection', (socket) => {
    console.log(`a user with the id ${chalk.blue(socket.id)} has connected.`);

    // disconnect event
    socket.on('disconnect', () => {
        console.log(`user ${chalk.red(socket.id)} disconnected.`);
    });


    // --- custom game-namespace ---
    let nsp = io.of('/game');

    nsp.on('connection', (socket) => {
        console.log(`user ${chalk.green(socket.id)} has joined namespace ${chalk.green('/game')}`);
        nsp.emit('server-message', 'Hello from server! Thank you for joining the /game channel.');
    });



    // --- user messages ---
    // socket.on('user click', (msg) => {
    //     console.log(`user ${chalk.blue(socket.id)} has clicked a button. `);
    //
    //     io.emit('user click feedback', {status: 'success', payload: {user: socket.id, message: 'button pressed: ' + msg} });
    // });
    //
    // socket.on('user released', (msg) => {
    //
    // });
});




http.listen(3000, function() {
    console.log('listening on localhost:3000');
});