"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
const port = process.env.PORT || 8989;
app.get('/', function (req, res) {
    res.sendfile('./src/index.html');
});
server.listen(port, function (err) {
    console.log(`Listening on port ${port}`);
    if (err) {
        console.log(err);
    }
});
io.on("connection", (socket) => {
    socket.on("send:message", (message) => {
        io.emit("receive:message", message);
    });
});
