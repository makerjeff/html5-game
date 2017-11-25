// Numbered Box class
// a Container can be used to display other graphics.
class NumberedBox extends createjs.Container {
    constructor(game, number=0) {
        super();    // required to initialize the parent's constructor.

        this.game = game;   // used to specify NumberedBox's game instance.

        let movieclip = new lib.NumberedBox();  // linkage name from Adobe Animate CC.
        movieclip.numberText.text = number;     // property inside
        this.addChild(movieclip);               // required; adding clip

        // manually set bounds, so it can be retrieved with getBounds()
        movieclip.setBounds(0,0,50,50);

        // --- event handlers ---
        this.on('click', this.handleClick.bind(this));  // refers to the Game class event handler(?)
    }

    // --- event handler functions ---
    handleClick() {
        this.game.handleClick(this);
    }
}

// game class
class Game {
    constructor() {
        console.log(`Welcome to the game! Version ${this.version()}`);

        this.canvas = document.getElementById('game-canvas');
        this.stage = new createjs.Stage(this.canvas);

        // reference stage dimensions to canvas dimensions.
        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        // createjs.Ticker.setFPS(60); //old
        createjs.Ticker.framerate = 60;

        // manually draw to stage on every tick (manual control of animation)
        createjs.Ticker.on('tick', this.stage);

        // debug
        window.debugStage = this.stage; //JWX: in console, type "debugState"

        // --- START CREATING STAGE ELEMENTS ---

        // create background
        let background = new lib.Background();
        this.stage.addChild(background);

        // create a NumberedBox manually
        this.stage.addChild(new NumberedBox(this, 88));

        // generate 20 random boxes.
        this.generateMultipleBoxes(20);


    }
    version() {
        return '0.0.2';
    }

    // distribute boxes.
    generateMultipleBoxes(amount=10) {

        // reverse for loop, because we want the last number in the back.
        for (let i = amount; i > 0; i--) {
            let movieclip = new NumberedBox(this, i);
            this.stage.addChild(movieclip);

            // console.log(movieclip.getBounds());

            // random position
            movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
            movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
        }
    }

    // handle click
    handleClick(numberedBox) {
        this.stage.removeChild(numberedBox);
    }
}

// start new game
const game = new Game();
// game.generateMultipleBoxes(20);  //DO INSIDE GAME CONSTRUCTOR.
