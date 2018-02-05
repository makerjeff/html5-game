// socket-play server 2017.12.29

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);      // socket.io REQUIRED.
const chalk = require('chalk');

app.get('/', function(req, res) {
    // res.send('<h1>Hello world </h1>');
    res.sendFile(__dirname + '/socket-play/public/index.html');
});

// socket.io
io.on('connection', function(socket) {
    console.log(`a user with the id ${chalk.blue(socket.id)} has connected.`);



    // socket events
    socket.on('disconnect', function() {
        console.log(`user ${chalk.red(socket.id)} disconnected. `);
    });

    // any chat message
    socket.on('chat message', function(msg) {
        console.log(`${chalk.blue(socket.id)} says: ${msg}`);

        // broadcast to all with IO

        let message_package = {
            user: socket.id,
            msg: msg
        };

        io.emit('chat message', message_package);
    });


});




// start server
http.listen(3000, function() {
    console.log('listening on *:3000');
});