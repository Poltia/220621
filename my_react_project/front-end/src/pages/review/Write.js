import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reviewAction } from "../../redux/middleware/reviewAction";
import { Button } from "../../styles/CommonStyle";
import { WriteWrap, WriteTitle, Text, Btns } from "../../styles/WriteStyle";

const Write = () => {
    // Hook 할당
    const nav = useNavigate();
    const dispatch = useDispatch();

    // input 값 가져오기
    const [title, setTitle] = useState("");
    const input = (e) => {
        setTitle(e.target.value);
    };
    const [text, setText] = useState("");
    const textarea = (e) => {
        setText(e.target.value);
    };

    //
    const write = () => {
        const id = sessionStorage.getItem("userID");
        if (id === null) {
            alert("로그인 후 이용하세요");
            nav("/login");
        } else if (title === null || title === "") {
            alert("제목을 입력해주세요.");
        } else if (text === null || text === "") {
            alert("내용을 입력해주세요.");
        } else {
            dispatch(reviewAction.write(id, title, text, nav));
        }
    };

    return (
        <WriteWrap className="write">
            <WriteTitle type="text" placeholder="제목" onChange={input} autoFocus />
            <Text placeholder="내용" onChange={textarea} />
            <Btns>
                <Button
                    onClick={() => {
                        nav("/review");
                    }}
                >
                    돌아가기
                </Button>
                <Button onClick={write}>글등록</Button>
            </Btns>
        </WriteWrap>
    );
};

export default Write;
