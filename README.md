#Learn HTML5 Game Development

##Notes
Required setup for CreateJS:
- Game Class:
    - createjs.Stage(canvas);
    - createjs.Ticker.framerate = 60;
    - createjs.Ticker.on('tick', this.stage);
    - window.debugStage = this.stage; (reference to the stage element for debugging.)
    - enable touch support
    - make retina ready
    - enable mouse over explicitely with "this.stage.enableMouseOver();"
    
- Game Data Class:
    - Use this class in Game.
- NumberedBox Class:
    - must explicitly setBounds(x,y,width,height) for each movieclip, otherwise getBounds() will not work.
    - need a [button helper class](https://www.createjs.com/docs/easeljs/classes/ButtonHelper.html) (refer to code and [lynda.com video](https://www.lynda.com/HTML-tutorials/Preparing-your-graphics/597987/603476-4.html?autoplay=true) ) once mouseOver is enabled in the Game class.

- General:
    - this.stage.addChild(child) to add game elements.
    - this.stage.removeChild(child) to remove elements.
    
ADOBE ANIMATE:
- Use "Library>Linkage" to create a variable name in Adobe Animate that can be referenced in createJS output.
- For random positioning, offset element position with "movieclip.getBounds().width" and "movieclip.getBounds().height".
- Add "this.stop()" to an 'actions' layer to stop the animation from re-playing.
- set an instanceName to be referred to in code.