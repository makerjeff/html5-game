#SOCKET NOTES

## Messaging:
- Send to all sockets in the room:
    - `io.sockets.in('room name').emit('message', "Welcome ${socket.id} to the room!");`
- Send to clients in room:
    - `io.sockets.in('room name').emit('message', "Welcome to room ${room}");`
- Send directly to specific client:
    - `io.to(socket.id).emit('message', 'private message sent only to connector. your ID is ' + socket.id);
`
