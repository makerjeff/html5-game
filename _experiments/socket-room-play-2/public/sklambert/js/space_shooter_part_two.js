
/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a singleton.
 */

var imageRepository = new function() {
    //define images
    this.background = new Image();
    this.spaceship = new Image();
    this.bullet = new Image();

    // ensure all images have loaded before starting the game.
    var numImages = 3;
    var numLoaded = 0;

    // load check
    function imageLoaded() {
        numLoaded++;
        if (numLoaded === numImages) {
            init();
        }
    }

    this.background.onload = function() {
        imageLoaded();
    };
    this.spaceship.onload = function() {
        imageLoaded();
    };
    this.bullet.onload = function() {
        imageLoaded();
    };

    // set images src
    this.background.src = './imgs/bg.png';
    this.spaceship.src = './imgs/ship.png';
    this.bullet.src = './imgs/bullet.png';
};


/**
 * Creates the base Drawable object
 * Object that all other objects are derived from.
 */

function Drawable() {
    this.init = function(x, y, width, height) {
        // default vars
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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


// tutorial 2 main objects here

/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent garbage collection.
 */

function Pool(maxSize) {
    var size = maxSize; // Max bullets allowed in the pool.
    var pool = [];

    // Populates the pool array with Bullet object
    this.init = function() {
        for (var i = 0; i < size; i++) {
            var bullet = new Bullet();  // to be created
            bullet.init(0,0, imageRepository.bullet.width, imageRepository.bullet.height);
            pool[i] = bullet;   // different way of pushing object to array.
        }
    };

    /**
     * Grabs the last item in the list and initializes it and pushes to front of array.
     */
    this.get = function(x, y, speed) {
        if (!pool[size-1].alive) {
            pool[size-1].spawn(x, y, speed);
            pool.unshift(pool.pop());
        }
    };

    /**
     * Used for the ship to be able to get two bullets at once.
     * If only the get() function is used twice, the ship is able to
     * fire and only have 1 bullet spawn instead of 2.
     */
    this.getTwo = function(x1, y1, speed1, x2, y2, speed2) {
        if (!pool[size-1].alive && !pool[size-2].alive) {
            this.get (x1, y1, speed1);
            this.get(x2, y2, speed2);
        }
    };

    /**
     * Draws any in-use Bullet objects. If a bullet goes off the screen,
     * clear it and push it to the front of the array.
     */

    this.animate = function() {
        for (var i = 0; i < size; i++) {
            if (pool[i].alive) {
                if (pool[i].draw()) {
                    pool[i].clear();
                    pool.push((pool.splice(i,1))[0]);
                }
            } else {
                break;
            }
        }
    };
}

/**
 * Creates the Bullet object which the ship fires. The bullest are
 * drawn on the "main" canvas
 */

function Bullet() {
    this.alive = false; // true if bullet is in use.

    // sets bullet values
    this.spawn = function(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.alive = true;
    };

    /**
     * Uses a 'dirty rectangle' to erase the bullet and moves it.
     * Returns true if the bullet moved off the screen, indicating it's
     * ready to cleared by the pool, otherwise draws the bullet.
     */
    this.draw = function() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
        this.y -= this.speed;   //in-line 'update' essentially

        if (this.y <= 0 - this.height) {
            return true;
        } else {
            this.context.drawImage(imageRepository.bullet, this.x, this.y);
        }
    };

    /**
     * Resets the bullet values
     */
    this.clear = function() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.alive = false;
    };
}

Bullet.prototype = new Drawable();  // learn this pattern for inheritance.


/**
 * Create the Ship object that the player controls. The ship is drawn on
 * the "ship" canvas and uses dirty rectangles to move around the screen.
 */

function Ship() {
    this.speed = 3;
    this.bulletPool = new Pool(30);
    this.bulletPool.init();
    var fireRate = 15;
    var counter = 0;

    this.draw = function() {
        this.context.drawImage(imageRepository.spaceship, this.x, this.y);
    };

    this.move = function() {
        counter++;

        // determine if the action is a move action.
        if (KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.down || KEY_STATUS.up) {
            // The ship moved, so erase its current image so it can
            // be redrawn in its new location.
            this.context.clearRect(this.x, this.y, this.width, this.height);

            // Update x and y according to direction to move and redraw ship.
            // Change the else-if's to if statements to have diagonal movement.

            if (KEY_STATUS.left) {
                this.x -= this.speed;

                if (this.x <= 0) {
                    this.x = 0;
                }
                else if (KEY_STATUS.right) {
                    this.x += this.speed;

                    if (this.x >= this.canvasWidth - this.width) {
                        this.x = this.canvasWidth - this.width;
                    }
                }
                else if (KEY_STATUS.up) {
                    this.y -= this.speed;

                    if (this.y <= this.canvasHeight/4 * 3) {
                        this.y = this.canvasHeight/4 * 3;
                    }
                }
                else if (KEY_STATUS.down) {
                    this.y += this.speed;

                    if (this.y >= this.canvasHeight - this.height) {
                        this.y = this.canvasHeight - this.height;
                    }
                }

                // finish by redrawing the ship
                this.draw();
            }

            if (KEY_STATUS.space && counter >= fireRate) {
                this.fire();
                counter = 0;
            }
        }
    };

    this.fire = function() {
        this.bulletPool.getTwo(this.x + 6, this.y, 3, this.x + 33, this.y, 3);
    };
}

Ship.prototype = new Drawable();

// The keycodes that will be mapped when a user presses a button.
// Original code by Doug McInnes
var KEY_CODES = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

var KEY_STATUS = {};

for (code in KEY_CODES) {
    KEY_STATUS[KEY_CODES[code]] = false;
}

/**
 * Sets up the document to listen to onkeydown events (fired when
 * any key on the keyboard is pressed down). When a key is pressed,
 * it sets the appropriate direction to true to let us know which
 * key it was.
 */
window.addEventListener('keydown', function(e) {
    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;

    if (KEY_CODES[keyCode]) {
        e.preventDefault();
        KEY_STATUS[KEY_CODES[keyCode]] = false;
    }
});


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
        this.shipCanvas = document.getElementById('ship');
        this.mainCanvas = document.getElementById('main');

        // canvas support test
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');
            this.shipContext = this.shipCanvas.getContext('2d');
            this.mainContext = this.mainCanvas.getContext('2d');

            // initialize objects to contain their context and canvas info.
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;
            Ship.prototype.context = this.shipContext;
            Ship.prototype.canvasWidth = this.shipCanvas.width;
            Ship.prototype.canvasHeight = this.shipCanvas.height;
            Bullet.prototype.context = this.mainContext;
            Bullet.prototype.canvasWidth = this.mainCanvas.width;
            Bullet.prototype.canvasHeight = this.mainCanvas.height;

            // Initialize the background object
            this.background = new Background();
            this.background.init(0,0);  // set the drawing point to 0,0

            // initialize ship object
            this.ship = new Ship();
            // Set the ship to start near the buttom middle of the canvas.
            var shipStartX = this.shipCanvas.width/2 - imageRepository.spaceship.width;
            var shipStartY = this.shipCanvas.height/4 * 3 + imageRepository.spaceship.height * 2;
            this.ship.init(shipStartX, shipStartY, imageRepository.spaceship.width, imageRepository.spaceship.height);

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
    game.ship.move();
    game.ship.bulletPool.animate();
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



// second tutorial stuff here
/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent garbage collection.
 */

// TODO: create pool

/**
 * Creates the Bullet object which the ship fires. The bullets are drawn on the "main" canvas.
 */
// TODO: create bullet
