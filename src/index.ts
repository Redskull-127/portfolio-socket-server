import 'dotenv/config'

import {Server} from "socket.io"


const io = new Server(process.env.NODE_ENV === "production" ? 80 : 8989, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    console.log("connected")
    socket.on("send:message", (message) => {
        console.log(message)
        io.emit("receive:message", message)
    })
})