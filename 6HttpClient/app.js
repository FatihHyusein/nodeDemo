var http = require('http');

//request - writable stream
//response - readable stream

// var request = http.request('http://node.green/', function (response) {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });
//
// request.end();

http.get('http://node.green/', function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});



