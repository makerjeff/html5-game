function Box(x, y, w, h) {

    let options = {
        friction: 0.025,
        restitution: 0.5
    };

    this.body = Bodies.rectangle(x,y,w,h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);

    this.show = function() {
        let pos = this.body.position;
        let angle = this.body.angle;
        
        ctx.save();

        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'red';
        // ctx.lineWidth = 5;
        ctx.translate(pos.x, pos.y);
        ctx.rotate(angle);

        // ctx.translate(-pos.x, -pos.y);

        ctx.fillRect(0,0, this.w, this.h);
        ctx.stroke();

        ctx.restore();
    };
}