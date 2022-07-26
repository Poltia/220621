
// express 모듈 사용
const express = require("express");
// fs 모듈 사용
const fs = require("fs");
// socket.io 모듈 사용
const socketio = require("socket.io");

// 서버 객체 만들기
const app = express();

// 사용할 포트 변수에 바인딩(할당해 놓는다)
const PORT = 1988;

const server = app.listen(PORT, () => {
    console.log(PORT, "에 잘 열렸어요");
});

// socket.io 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("page2.html", (err, data) => {
        res.end(data);
    });
});

//io.sockets.on("connection")  클라이언트가 접속했을때
//io.sockets.on("disconnect")  클라이언트가 종료했을때

io.sockets.on("connection", (socket) => {
    //클라이언트에서 socket.emit("message", data);
    //웹소켓에 연결되어 있는 message 이벤트를 실행시켜준다.
    socket.on("message", (data) => {
        io.sockets.emit("message", data);
    });
});