var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.url == '/file') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }
    else {
        res.end('Success Response');
    }
});

server.listen(5000);
console.log('Server runs');