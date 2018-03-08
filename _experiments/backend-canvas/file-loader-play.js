const Canvas = require('canvas');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile(process.cwd() + '/sourcefiles/car-1.png', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var img = new Canvas.Image();
            img.src = data;

            // build canvas
            var canvas = new Canvas(img.width, img.height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            res.write("<html><body>");
            res.write(`<img src="${canvas.toDataURL()}"/>`);
            res.write('</body></html>');
            // res.write('<html><body>hi</body></html>');

            res.end();
        }
    });
});

server.listen(3000, function() {
    console.log('running server on 3000');
});
