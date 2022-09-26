import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Login = ({ user, setLogin, setLogin_user }) => {
    const [id, setId] = useState("");
    const id_input = (e) => {
        setId(e.target.value);
    };
    const [password, setPassword] = useState("");
    const pw_input = (e) => {
        setPassword(e.target.value);
    };

    const nav = useNavigate();

    function confirm() {
        for (let i = 0; i < user.length; i++) {
            if (id == user[i].id) {
                if (password == user[i].password) {
                    setLogin_user(user[i]);
                    setLogin(true);
                    nav("/");
                    return;
                }
            }
        }
        alert("아이디와 비밀번호를 확인해주세요.");
    }
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
