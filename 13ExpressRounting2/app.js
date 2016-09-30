var express = require('express'),
    app = express(),
    home = require('./routes/home'),
    contacts = require('./routes/concats')
    ;

app.configure('production', function () {
    app.set('text', 'production text');
});

app.configure('development', function () {
    app.set('text', 'dev text');
});

app.get('/', function (req, res) {
    res.send(app.get('text'));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});