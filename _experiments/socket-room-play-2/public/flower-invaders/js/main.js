// flower-invaders / main.js

var width       = 600,
    height      = 400;

var canvas      = document.createElement('canvas'),
    ctx         = canvas.getContext('2d');

var then        = Date.now(),
    now,
    delta_then  = Date.now(),
    delta_now,
    delta,
    interval    = 1000;


var game_objects = [];

var keysDown = {};




// --- SHIP CLASS ---
//todo: move into its own file
var Ship = function(name, posX, posY, speed) {
    this.name = name || 'UGO-' + Date.now();
    this.x = posX;
    this.y = posY || (canvas.height - 30);
    this.speed = speed || 1;
    this.vector = {};

    this.vector.x = 0;
    this.vector.y = 0;

    this.update = function(delta) {


        // check X
        if (keysDown[37]) {
            this.vector.x = -1 * this.speed * delta;
        }
        else if (keysDown[39]) {
            this.vector.x = 1 * this.speed * delta;
        }
        else {
            this.vector.x = 0;
        }

        // check Y
        if (keysDown[38]) {
            this.vector.y = -1 * this.speed * delta;
        }
        else if (keysDown[40]) {
            this.vector.y = 1 * this.speed * delta;
        }
        else {
            this.vector.y = 0;
        }

        this.x = this.x + this.vector.x;
        this.y = this.y + this.vector.y;

    };

    //todo: put into prototype
    this.show = function() {

        ctx.save();
        ctx.beginPath();

        ctx.fillStyle = '#fff';

        ctx.fillRect(this.x, this.y, 50, 50);

        ctx.closePath();
        ctx.restore();
    };

    game_objects.push(this);
};


// -- SETUP FUNCTION ---
function setup() {
    //todo: wrap this into a game object
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);


    var ship = new Ship('ship1', canvas.width/2, canvas.height/2, 500);
    var ship2 = new Ship('ship2', canvas.width/3, canvas.height/3, 20);

    main();
}

// --- DRAW FUNCTION ---
function periodic_draw() {
    console.log('periodic_draw-ping ' + now);
}


function draw() {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    game_objects.forEach(function(elem, ind, arr) {
        elem.show();
    });

    // console.log(delta);

}


// --- MAIN LOOP ---
function main() {


    // --- periodic draw pattern ---
    now = Date.now();

    if (now - then >= interval) {
        then = now;
        periodic_draw();
    }

    delta_now = Date.now();
    delta = (delta_now - delta_then) / 1000;

    draw();

    // --- UPDATE METHOD ---
    // todo: put into it's own update method
    game_objects.forEach(function(elem, ind, arr) {
        elem.update(delta);
    });

    delta_then = delta_now;

    // --- periodic draw pattern - END ---
    requestAnimationFrame(main);
}


// ---------------------------
// --- standard DOM events ---
// ---------------------------
window.addEventListener('load', function(e) {
    setup();
});

// --- lost decade games keyboard input ---
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

