
/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a singleton.
 */

var imageRepository = new function() {
    //define images
    this.background = new Image();
    this.background.src = './imgs/bg.png';
};


/**
 * Creates the base Drawable object
 * Object that all other objects are derived from.
 */

function Drawable() {
    this.init = function(x, y) {
        // default vars
        this.x = x;
        this.y = y;
    };

    this.speed = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;

    // define "abstract function" to be implemented in child objects
    this.draw = function() {
    };
}

/**
 * Create the background object which will become a child of the Drawable object.
 * The background is drawn on the "background" canvas and creates the illusion of
 * moving by panning the image.
 */

function Background() {
    this.speed = 1; // Redefine speed of the background for panning
    // Implement abstract function
    this.draw = function() {

        // pan background
        this.y += this.speed;
        this.context.drawImage(imageRepository.background, this.x, this.y);

        // draw another image at the top edge of first image.
        this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);

        // if the image scrolled off the screen, reset
        if (this.y >= this.canvasHeight) {
            this.y = 0;
        }
    };
}

// Set Background to inherit properties from Drawable (TODO: Note: this is a new pattern!
Background.prototype = new Drawable();

/**
 * Creates the Game object which will hold all objects and data
 * for the game.
 */

function Game() {
    /**
     * Gets canvas information and context and sets up all game objects.
     * Returns true if the canvas is supported and false if it is not.
     * This is to stop the animation script from constantly running
     * in older browsers.
     */

    this.init = function() {
        // get the canvas
        this.bgCanvas = document.getElementById('background');

        // canvas support test
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');

            // initialize objects to contain their context and canvas info.
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;

            // initialize bg object
            this.background = new Background();

            this.background.init(0,0);
            return true;
        } else {
            return false;
        }
    };

    // start animation loop
    this.start = function() {
        animate();
    };
}

/**
 * The animation loop. Calls requestAnimationFrame to optimize the game loop and draws
 * all game objects. TODO: NOTE: This function must be global and cannot be within an object.
 */

function animate() {
    requestAnimationFrame(animate);
    game.background.draw();
}

/**
 * Initialize the Game and starts it.
 */

var game = new Game();

function init() {
    if (game.init()) {
        game.start();
    }
}

init();
