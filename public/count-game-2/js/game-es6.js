// logic for Count Game
class Game {
    constructor() {
        console.log(`Welcome to the game! Version ${this.version()}`);

        // setup canvas and create stage
        this.canvas = document.getElementById('game-canvas');
        this.stage = new createjs.Stage(this.canvas);

        // new createjs method of Ticker
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', this.stage); //redraws the stage every 'tick'


        // TEST (remove Me)
        var circle = new createjs.Shape();
        circle.graphics.beginFill('yellow').drawCircle(0,0, 40);
        circle.x = circle.y = 100;
        this.stage.addChild(circle);

    }

    version() {
        return '1.0.0';
    }
}



// start the game
var game = new Game();