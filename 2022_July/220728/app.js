
/* 채팅방 만들기
방개념

사용할 모듈
express, socket.io, fs, nodemon

먼저 npm init -y 하고
모듈들 설치

// 모듈 버전 확인할 수 있는 곳
https://www.npmjs.com/
*/

const express = require("express");
const socketio = require("socket.io");
const fs = require("fs");

// express만 -----------------------------
// 서버의 몸체가 되는 객체가 만들어짐
const app = express();

// 서버를 3000번 포트에서 듣고있게 한다.
// 대기상태
const server = app.listen(3000, () => {
    console.log(3000, "번 포트 열림");
});
// --------------------------------------

// socket.io 생성 및 실행 ------------------
const io = socketio(server);
// "/socket.io/socket.io.js" 이경로로 js파일에 접근할 수 있다. (html에 스크립트로 입력)
// --------------------------------------

app.get("/", (req, res) => {
    fs.readFile("page.html", "utf-8", (err, data) => {
        // 문제 없이 파일 읽기가 처리되었으면 err는 null
        console.log("readFile err = "+err);
        res.send(data);
    });
});

// 클라이언트가 접속 했을 때
io.on("connection", (socket) => {
    //console.log(socket);
    console.log("유저 접속");
    socket.on("joinRoom", (room, name) => {
        //join(방이름) : 방 개념으로 접속 시켜주는 함수
        socket.join(room);
        //to(room) >> 현재 그 방에 있는 클라이언트에게 요청
        io.to(room).emit("joinRoom", room, name);
    });

    socket.on("leaveRoom", (room, name) => {
        // leave(방이름) : 방개념으로 떠나게 해주는 함수
        socket.leave(room);
        // to(room)
        io.to(room).emit("leaveRoom", room, name);
    });

    socket.on("chat", (room, name, msg) => {
        io.to(room).emit("chat", name, msg);
    });
});
// ** html에 script태그로
// const socket = io.connect();  해줘야 연결이 됨

/*
접속된 모든 클라이언트에게 메시지를 전송
io.emit("이벤트명", 보낼 데이터);

메시지를 전송한 클라이언트에게만 메시지 전송
socket.emit("이벤트명", 보낼 데이터);

메시지를 전송하는데, 자기 제외 방송
socket.broadcast.emit("이벤트명", 보낼 데이터);

특정 클라이언트에게만 메시지 전송 (귓속말)
io.to(아이디).emit("이벤트명", 보낼 데이터);

클라이언트 접속과 종료. 들어왔을때 나갔을때
io.on("connection"(접속)/"disconnection"(종료), (socket) => {});
*/
