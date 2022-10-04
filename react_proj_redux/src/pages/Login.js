import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [id, setId] = useState("");
    const id_input = (e) => {
        setId(e.target.value);
    };
    const [password, setPassword] = useState("");
    const pw_input = (e) => {
        setPassword(e.target.value);
    };

    const nav = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const confirm = () => {
        users.forEach((e) => {
            if (e.id == id) {
                if (e.password == password) {
                    dispatch({ type: "LOGIN_IS", payload: true });
                    dispatch({ type: "LOGIN_USER", payload: e });
                    console.log(e.id + "님 로그인");
                    nav("/");
                } else if (e.password != password) {
                    alert("비밀번호를 확인해주세요.");
                }
            }
        });
    };
    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return confirm();
        }
    };

    return (
        <div>
            <Header />
            <div>
                <div className="signup">
                    <div>
                        ID
                        <br />
                        <input
                            onChange={id_input}
                            onKeyPress={enterKeyPress}
                            autoFocus
                        />
                    </div>
                    <div>
                        PW
                        <br />
                        <input
                            onChange={pw_input}
                            onKeyPress={enterKeyPress}
                            type="password"
                        />
                    </div>
                    <button onClick={confirm}>로그인</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
