        var EventEmitter = require('events').EventEmitter;

        var getData = function (times) {
            var e = new EventEmitter();
            setTimeout(function () {
                var count = 0;
                e.emit('start');
                var interval = setInterval(function () {
                    e.emit('data', ++count);
                    if (count == times) {
                        e.emit('end', count);
                        clearInterval(interval);
                    }

                    //limit of count
                    if (count >= 10) {
                        e.emit('error');
                        clearInterval(interval);
                    }
                }, 10);
            }, 10);

            return e;
        };

        var receiver = getData(12);

        receiver.on('start', function () {
            console.log('started.....');
        });

        receiver.on('data', function (data) {
            console.log('data received: ' + data);
        });

        receiver.on('end', function () {
            console.log('end!!!')
        });

        receiver.on('error', function () {
            console.log('an error occurred');
        });

