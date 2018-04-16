function Box(x,y,w,h) {

    var options = {
        friction: 0.025,
        restitution: 0.5
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push(); //p5.js version of saving canvas state
        translate(pos.x, pos.y);    //  translating canvas, so rect can be created at 0.
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();  //reset canvas.
    };
}