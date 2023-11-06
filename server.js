
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/client.js', (req, res) => {
    res.sendFile(__dirname + '/client/client.js');
});


server.listen(3000, () => {
    console.log('Server is listening on port http://localhost:3000');
});
