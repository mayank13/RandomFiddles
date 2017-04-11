var fs = require('fs');
fs.readFile('fileMap.json', function(error, data) {
    if (error) {
        console.log(error);
        return;
    }

    var obj = JSON.parse(data);
    for (var p in obj) {
        fs.rename(p, obj[p] + '.mp4', function(err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
});