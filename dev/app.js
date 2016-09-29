var express = require('express');

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.static('views'));


app.get('/', function (req, res) {
    res.send('hom2e');
});

app.get('/test', function (req, res) {
    res.send('assssd');
});

app.listen(port, function () {
    console.log('listen on port: ' + port);
});