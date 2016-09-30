var express = require('express'),
    mysql = require('mysql'),
    app = express(),

    home = require('./routes/home'),
    carsRouter = require('./routes/carRoutes')
    ;


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'sadas'
});

connection.connect(function (err) {
    if (err) {
        console.log('error connectiong: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');

app.use(express.static('public'));
app.set('views', './views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');


app.use('/cars', carsRouter);

app.get('/', function (req, res) {
    res.render('index', {data: 'some data'});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});