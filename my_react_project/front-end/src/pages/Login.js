import React, { useState } from "react";
import { SignupWrap } from "../styles/SignupStyle";
import { Title, Button } from "../styles/CommonStyle";
import { loginAction } from "../redux/middleware/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState("");
    const idInput = (e) => {
        setId(e.target.value);
    };
    const [password, setPassword] = useState("");
    const pwInput = (e) => {
        setPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const nav = useNavigate();

    const login = () => {
        dispatch(loginAction.login(id, password));
        nav("/");
    };

    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return login();
        }
    };

    return (
        <SignupWrap>
            <Title>로그인</Title>
            <label>아이디</label>
            <br />
            <input type="text" onChange={idInput} onKeyPress={enterKeyPress} />
            <br />
            <label>비밀번호</label>
            <br />
            <input type="password" onChange={pwInput} onKeyPress={enterKeyPress} />
            <br />
            <Button onClick={login}>로그인</Button>
        </SignupWrap>
    );
};

export default Login;
