const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');

connectDB();
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

app.use(cors());
app.use(express.json());

app.use('/sessions', require('./routes/sessions'))

io.on('connection', (socket) => {
    socket.on('joinSession', ({id, name}) => {
        socket.join(id);
        if (io.sockets.adapter.rooms[id].length < 2) {
            io.sockets.adapter.rooms[id].host = name;
            io.sockets.in(id).emit("showConnections", {
              activePlayers: io.sockets.adapter.rooms[id].length,
              host: name,
            });
          } 
        else {
            io.sockets.in(id).emit("showConnections", {
                activePlayers: io.sockets.adapter.rooms[id].length,
                host: io.sockets.adapter.rooms[id].host,
                guest: name
            });
        }
    });
    socket.on("disconnect", () => socket.removeAllListeners());
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));