var fs = require('fs');

var folderName = 'tmp';
var filePath = 'tmp/test.txt';

if (fs.existsSync(folderName)) {
    console.log('removing tmp dir...');
    fs.unlinkSync(filePath);
    fs.rmdirSync(folderName);
}

fs.mkdirSync(folderName);
if (fs.existsSync(folderName)) {
    process.chdir(folderName);
    fs.writeFileSync('temp.txt', 'Sync data created');
    fs.renameSync('temp.txt', 'test.txt');

    console.log('New File size: ' + fs.statSync('test.txt').size + 'bytes');
    console.log('Data: ' + fs.readFileSync('test.txt').toString());
}