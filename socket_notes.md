#SOCKET NOTES

## Messaging:
- Send to all sockets in the room:
    - `io.sockets.in('room name').emit('message', "Welcome ${socket.id} to the room!");`
    - Use this to send game-state change message.
- Send directly to specific client:
    - `io.to(socket.id).emit('message', 'private message sent only to connector. your ID is ' + socket.id);`
    - use this to send player-specific messages.
