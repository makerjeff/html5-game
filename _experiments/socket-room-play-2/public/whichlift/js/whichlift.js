// whichlift.js
// Let's do this with PURE JS!

var socket = io.connect();
var room = 'abc123';

// create ping button
var ping_button = document.createElement('button');
ping_button.id = 'ping_button';
ping_button.innerHTML = 'click me';
document.body.appendChild(ping_button);

// create result div
var result_div = document.createElement('div');
document.body.appendChild(result_div);

// SOCKET EVENTS
socket.on('connect', function() {
    console.log('Socket connected');
});

socket.on('message', function(data) {
    console.log(`Incoming message from server: ${data}`);
});

socket.on('game_hold', function(data) {
    result_div.innerHTML = `${data.who} hit the button. `;
    ping_button.disabled = true;
});

// update game state here.
socket.on('game_message', function(data) {
    console.log(data);

    result_div.innerHTML = `${data.who} rolled a ${data.lift}`;
    ping_button.disabled = false;
});


var data = {num: 3};

ping_button.onclick = function(e) {
    e.preventDefault();
    console.log('sending message');
    socket.emit('_ping', data);

};

