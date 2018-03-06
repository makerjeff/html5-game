var Canvas = require('canvas');
var canvas = new Canvas(640,480);


// spit something out on canvas
function canvas_spit(context, color) {
    context.save();
    context.beginPath();
    context.fillStyle = color || 'black';
    context.rect(0,0, canvas.width, canvas.height);
    context.fill();
    context.closePath();
    context.restore();
    console.log('returning color: ' + color);
    // return low quality jpg.
    return canvas.toDataURL('image/png', 0.1);
}

// export
module.exports.canvas_spit = canvas_spit;
