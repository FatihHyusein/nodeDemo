var http = require('http');
var fs = require('fs');

fs.createReadStream('data.txt').pipe(fs.createWriteStream('result.txt'));

