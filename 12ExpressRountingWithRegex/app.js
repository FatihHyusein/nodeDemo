var express = require('express'),
    app = express(),
    home = require('./routes/home'),
    contacts = require('./routes/concats')
    ;

app.get('/', home.index);

//customer/10
app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function (req, res) {
    res.send('range from ' + req.params[0] + ' to ' + req.params[1]);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});