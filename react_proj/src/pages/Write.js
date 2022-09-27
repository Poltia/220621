import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Write = ({
    setLogin_user,
    login_user,
    setTitle,
    setWrite,
    setWriter,
    setList,
    list,
    title,
    write,
}) => {
    const input_title = (e) => {
        setTitle(e.target.value);
    };
    const input_write = (e) => {
        setWrite(e.target.value);
    };

    const nav = useNavigate();
    function writing() {
        setWriter(login_user);
        const name = login_user.id;
        console.log(login_user);
        const profile = login_user.profile;
        setList([...list, { title, write, name, profile }]);
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
                        <button onClick={writing}>글등록</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Write;
