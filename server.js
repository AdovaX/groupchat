var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.send("ok");
});

io.on('connection', function(socket) {
    socket.on('event', function(data) {
        console.log('A client sent us this dumb message:', data.message);
    });
});



server.listen(8081);