const io = require("socket.io-client");

let socket = io.connect("http://localhost:8081");

socket.on('announcements', function(data) {
    console.log('Got announcement:', data.message);
});
socket.emit('event', { message: 'Hey, I have an important message!' });