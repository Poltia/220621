import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Write = () => {
    const [title, setTitle] = useState("");
    const input_title = (e) => {
        setTitle(e.target.value);
    };
    const [write, setWrite] = useState("");
    const input_write = (e) => {
        setWrite(e.target.value);
    };

    const dispatch = useDispatch();
    const nav = useNavigate();
    const user = useSelector((state) => state.login_user);
    const list = useSelector((state) => state.post_list);

    function posting() {
        dispatch({
            type: "POSTING",
            payload: {
                title: title,
                write: write,
                writer: user,
                profile: user.profile,
            },
        });
        console.log(list);
        nav("/board");
        return;
    }

    return (
        <>
            <Header />
            <div>
                <div className="write">
                    <input
                        className="write_title"
                        type="text"
                        placeholder="제목"
                        onChange={input_title}
                        autoFocus
                    />
                    <textarea
                        className="write_inner"
                        placeholder="내용"
                        onChange={input_write}
                    />
                    <div className="write_btns">
                        <button
                            onClick={() => {
                                nav("/board");
                            }}
                        >
                            돌아가기
                        </button>
                        <button onClick={posting}>글등록</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Write;
