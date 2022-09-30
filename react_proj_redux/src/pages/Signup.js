import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    const [id, setId] = useState("");
    const id_input = (e) => {
        setId(e.target.value);
    };
    const [password, setPassword] = useState("");
    const pw_input = (e) => {
        setPassword(e.target.value);
    };
    const [email, setEmail] = useState("");
    const email_input = (e) => {
        setEmail(e.target.value);
    };

    const nav = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const _signup = () => {
        let overlap = false;
        users.forEach((e, index) => {
            if (e.id == id) {
                alert("중복된 아이디 입니다.");
                overlap = true;
                return;
            }
        });
        if (overlap == false) {
            dispatch({
                type: "SIGNUP",
                payload: {
                    id: id,
                    password: password,
                    email: email,
                    profile: null,
                },
            });
            nav("/login");
        }
    };

    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return _signup();
        }
    };
    return (
        <>
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
                    <div>
                        email
                        <br />
                        <input
                            onChange={email_input}
                            onKeyPress={enterKeyPress}
                        />
                    </div>
                    <button onClick={_signup}>회원가입</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
