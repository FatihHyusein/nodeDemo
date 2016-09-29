var express = require('express'),
    app = express(),
    home = require('./routes/home'),
    contacts = require('./routes/concats')
    ;


app.get('/', home.index);
app.get('/contacts', contacts.contacts);
app.get('/contacts/details', contacts.contactsDetail);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});