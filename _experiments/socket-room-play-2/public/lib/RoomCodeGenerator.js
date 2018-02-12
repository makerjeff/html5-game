/**
 * Room Code Generator Module creates and
 * @constructor     Version number.
 */
function RoomCodeGenerator() {

    this.version = '0.0.2';
    // this.rooms = []; // NOT REQUIRED ON GAME CLIENT
    console.log('RCG version ' + this.version + ' loaded. ');
}

/**
 * Library of characters to pull from.
 * @type {string}   String of characters to build room code from.
 */
RoomCodeGenerator.prototype.library = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Creates a randomized room code.
 * @param num   Number of characters.
 * @returns {string}    Returns a joined string.
 */
RoomCodeGenerator.prototype.createRoomCode = function(num) {
    var buffer = [];

    for (var i = 0; i < num; i++) {
        buffer.push(this.library[Math.floor(Math.random() * this.library.length)]);
    }
    return buffer.join('');
};

/**
 * Loads room into an array of rooms stored in the instance.
 * @param room  Room code to load. If no room code is provided, automatically createRoomCode() with argument of 4.
 */
RoomCodeGenerator.prototype.loadRoom = function(room) {
    if (room) {
        this.rooms.push (room);
    } else {
        this.rooms.push(this.createRoomCode(4));
    }
};

/**
 * Removes the specified room from the instance array of rooms[].
 * @param room  [String] Room to remove from instance array.
 */
RoomCodeGenerator.prototype.removeRoom = function(room) {
    this.rooms.splice(this.rooms.indexOf(room), 1);
};