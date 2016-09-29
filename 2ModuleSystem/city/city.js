module.exports = {
    name: 'Sofia',
    map: {},
};

getData(id, function (err, result) {
    //    do stuff
});

var results = getData(id);
results.on('result', function () {
    //    do stuff
});
result.on('done', function () {
//    no more data
});
result.on('error', function (err) {
//    handle error
});