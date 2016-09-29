var fs = require('fs');

var e = fs.watch('watchedFile.txt', function (eventType, filename) {
    console.log('changed ' + filename);
});
