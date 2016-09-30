var express = require('express'),
    app = express(),

    home = require('./routes/home'),
    contacts = require('./routes/concats')
    ;


app.use(express.static('public'));
app.set('views', './views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');


app.get('/', function (req, res) {
    res.render('index', {data: 'some data'});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});