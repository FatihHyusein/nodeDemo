var express = require('express'),
    app = express(),
    home = require('./routes/home'),
    contacts = require('./routes/concats')
    ;

app.get('/', home.index);

//customer/10
app.get('/contacts/:id', function (req, res) {
    res.send('Contacts for: ' + req.params.id);
});

//customer?id=5
app.get('/contacts', function (req, res) {
    res.send('Contacts query for: ' + req.query.id);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});