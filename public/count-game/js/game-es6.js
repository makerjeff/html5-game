// Numbered Box class
// a Container can be used to display other graphics.
class NumberedBox extends createjs.Container {
    constructor(game, number=0) {
        super();    // required to initialize the parent's constructor.

        this.game = game;       // used to specify NumberedBox's game instance.
        this.number = number;   // used to store current number value to be accessed later by GameData.

        let movieclip = new lib.NumberedBox();  // linkage name from Adobe Animate CC.
        movieclip.numberText.text = number;     // property inside
        this.addChild(movieclip);               // required; adding clip

        // manually set bounds, so it can be retrieved with getBounds()
        movieclip.setBounds(0,0,50,50);

        // create a buttonhelper
        new createjs.ButtonHelper(movieclip, 0, 1, 2, false, new lib.NumberedBox(), 3);

        // --- event handlers ---
        this.on('click', this.handleClick.bind(this));  // binds 'NumberedBox' as 'this'; effectively defers click handling to the Game class.
    }

    // --- event handler functions ---
    handleClick() {
        this.game.handleClick(this);    // 'this' bound to 'NumberedBox';
    }

    /** Click Handler Delegation Scheme:
     * NumberedBox click handler function refers to the Game class's click handler.
     * NumberedBox click handler function is bound to itself using .bind(this) in the NumberedBox class.
     * Game class click handler takes this bound scope, and uses it to remove the NumberedBox it refers to.
     *
     */
}

// GAME DATA class : Handles game data logic.
class GameData {
    constructor() {
        this.amountOfBox = 20;
        this.resetData();
    }

    resetData() {
        this.currentNumber = 1;
    }

    nextNumber() {
        this.currentNumber += 1;
    }

    isRightNumber(number) {
        return (number === this.currentNumber);
    }

    isGameWin() {
        return (this.currentNumber > this.amountOfBox); // returns true if game winning logic checks.
    }
}

// MAIN GAME CLASS
class Game {
    constructor() {
        // ----- SETUP -----
        console.log(`Welcome to the game! Version ${this.version()}`);

        this.canvas = document.getElementById('game-canvas');
        this.stage = new createjs.Stage(this.canvas);

        // enable mouseOver
        this.stage.enableMouseOver();

        // reference stage dimensions to canvas dimensions.
        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        // instance of GameData class
        this.gameData = new GameData();

        // retinalize
        this.retinalize();

        // enable touch
        createjs.Touch.enable(this.stage);

        // createjs.Ticker.setFPS(60); //old
        createjs.Ticker.framerate = 60;

        // manually periodic_draw to stage on every tick (manual control of animation)
        createjs.Ticker.on('tick', this.stage);

        // debug
        window.debugStage = this.stage; //JWX: in console, type "debugState"

        // --- START CREATING STAGE ELEMENTS ---


        // TODO: debug-only, remove me.
        // // create a NumberedBox manually
        // window.box88 = new NumberedBox(this, 88);
        // // this.stage.addChild(new NumberedBox(this, 88));
        // this.stage.addChild(window.box88);

        this.restartGame();


    }

    version() {
        return '0.0.2';
    }

    restartGame() {
        this.gameData.resetData();
        this.stage.removeAllChildren();

        // create background
        let background = new lib.Background();  // moved out from constructor
        this.stage.addChild(background);        // moved out from constructor

        // generate 20 random boxes.
        this.generateMultipleBoxes(this.gameData.amountOfBox);
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

        if (this.gameData.isRightNumber(numberedBox.number)) {
            console.log(numberedBox.number);
            this.stage.removeChild(numberedBox);
            this.gameData.nextNumber();
        }

        // check game over logic.
        if(this.gameData.isGameWin()) {
            let gameOverView = new lib.GameOverView();
            this.stage.addChild(gameOverView);

            //listen for restartButton click
            gameOverView.restartBootan.on('click', (function() {
                this.restartGame();
            }).bind(this));     // must bind to 'this', so it refers to 'game' class.
        }

    }

    // make Retina Ready
    retinalize() {
        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        let ratio = window.devicePixelRatio;
        if (ratio === undefined) {
            return;
        }

        this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
        this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));

        this.stage.scaleX = this.stage.scaleY = ratio;

        this.canvas.style.width = this.stage.width + 'px';
        this.canvas.style.height = this.stage.height + 'px';
    }
}

// start new game
const game = new Game();
// game.generateMultipleBoxes(20);  //DO INSIDE GAME CONSTRUCTOR.
