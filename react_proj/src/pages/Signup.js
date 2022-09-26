import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Signup = ({ user, setUser }) => {
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
    //
    const nav = useNavigate();
    function checking() {
        for (let i = 0; i < user.length; i++) {
            if (id == user[i].id) {
                alert("중복된 id 입니다.");
                return;
            }
        }
        // user배열에 {...}객체를 추가한다.ㄱ 그런 구문
        setUser([...user, { id, password, email }]);
        nav("/login");
    }
    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return checking();
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
                    <div>
                        email
                        <br />
                        <input
                            onChange={email_input}
                            onKeyPress={enterKeyPress}
                        />
                    </div>
                    <button onClick={checking}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
