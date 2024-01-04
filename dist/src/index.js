"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(process.env.NODE_ENV === "production" ? 80 : 8989, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on("connection", socket => {
    console.log("connected");
    socket.on("send:message", (message) => {
        console.log(message);
        io.emit("receive:message", message);
    });
});
