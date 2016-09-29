var http = require('http');
var socketIO = require('socket.io');
var fs = require('fs');

var app = http.createServer(function (req, res) {
    // console.log(req.url);
    // if(req.url ==='/') {
        fs.readFile(__dirname + '/index.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error with index.html');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    // }
    // else {
    //     fs.readFile(__dirname + req.url, function (err, data) {
    //         if (err) {
    //             res.writeHead(500);
    //             return res.end('Error with index.html');
    //         } else {
    //             res.writeHead(200);
    //             res.end(data);
    //         }
    //     });
    // }
});

var io = socketIO.listen(app);

io.sockets.on('connection', function (socket) {
    var increment = 0;
    setInterval(function () {
        increment++;
        console.log('emitted: ' + increment);
        socket.emit('increment', increment);
    }, 1000);

    socket.on('newIncrement', function (val) {
        increment = val;
    });
});

app.listen(8080);
console.log('started!!!');
