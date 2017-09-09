var express = require('express');
var app = express();
var serv = require('http')
.Server(app);

var servers = [];
var server = function () {
    var obj = {
    ip: 'ws://localhost:5000'
        , type: 'Test'
    };
    return obj;
};

servers.push(new server());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/client.js', function (req, res) {
    res.sendFile(__dirname + '/js/client.js');
});

serv.listen(process.env.PORT || 2000);

console.log("User started.");
