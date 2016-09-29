var http = require('http');
var fs = require('fs');

var s = fs.createReadStream('data.txt');

s.on('data', function (data) {
    console.log('Data: ' + data);
});

s.on('end', function () {
    console.log('done!!!');
});