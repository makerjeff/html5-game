// flower-invaders / main.js

var width = 600, height = 400;

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var then = Date.now();
var now;
var interval = 1000;    //in MS

// setting up stuff.
function setup() {
    main();
}

// draw things (each item's draw should be done here)
function draw() {
    console.log('draw-ping ' + now);
}


// main loop
function main() {
    now = Date.now();

    if (now - then >= interval) {
        then = now;
        draw();
    }
    requestAnimationFrame(main);
}


// --- standard DOM events ---
window.addEventListener('load', function(e) {
    setup();
});

