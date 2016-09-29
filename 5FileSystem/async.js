var fs = require('fs');

var folderName = 'tmp';
var filePath = 'tmp/test.txt';

if (fs.existsSync(folderName)) {
    console.log('removing tmp dir...');
    fs.unlinkSync(filePath);
    fs.rmdirSync(folderName);
}

fs.mkdir(folderName, function (err) {
    fs.exists(folderName, function () {
        process.chdir(folderName);

        fs.writeFile('temp.txt', 'async data writing', function (err) {
            fs.rename('temp.txt', 'test.txt', function (err) {
                fs.stat('test.txt', function (err, stat) {
                    console.log('New File size: ' + stat.size + 'bytes');

                    fs.readFile('test.txt', function (err, data) {
                        console.log('Data: ' + data.toString());
                    });
                })
            })
        })
    });
});