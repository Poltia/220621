
const express = require("express");
const fs = require("fs");
const socketio = require("socket.io");
const path = require('path');

let seats = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const app = express();

// 어떤환경에서든 절대경로를 찾아서 할수있게 해주는 그시기!! 허허
app.use('/myjs', express.static(path.join(__dirname, '/')));
//----------------------------------------------------------
const PORT = 7483;
const server = app.listen(PORT, () => {
    console.log(PORT, "번 포트 실행");
});

// socket.io 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("bus1.html", (err, data) => {
        res.send(data.toString());
    });
});

app.get("/seats", (req, res) => {
    res.send(seats);
});

io.sockets.on("connection", (socket) => {
    socket.on("reserve", (data) => {
        seats[data.y][data.x] = 2;
        io.sockets.emit("reserve", data);
    });
});


app.get("/2", (req, res) => {
    fs.readFile("bus2.html", (err, data) => {
        res.send(data.toString());
    });
});

app.get("/seats2", (req, res) => {
    res.send(seats2);
});

io.sockets.on("connection", (socket) => {
    socket.on("reserve2", (data) => {
        seats2[data.y][data.x] = 2;
        io.sockets.emit("reserve2", data);
    });
});


app.get("/3", (req, res) => {
    fs.readFile("bus3.html", (err, data) => {
        res.send(data.toString());
    });
});

app.get("/seats3", (req, res) => {
    res.send(seats3);
});

io.sockets.on("connection", (socket) => {
    socket.on("reserve3", (data) => {
        seats3[data.y][data.x] = 2;
        io.sockets.emit("reserve3", data);
    });
});