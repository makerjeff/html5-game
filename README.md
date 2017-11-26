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
    
- Game Data Class:
    - Use this class in Game.
- NumberedBox Class:
    - must explicitely setBounds(x,y,width,height) for each movieclip, otherwise getBounds() will not work.
- General:
    - this.stage.addChild(child) to add game elements.
    - this.stage.removeChild(child) to remove elements.

- Use "Library>Linkage" to create a variable name in Adobe Animate that can be referenced in createJS output.
- For random positioning, offset element position with "movieclip.getBounds().width" and "movieclip.getBounds().height".
