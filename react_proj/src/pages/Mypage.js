import React, { useState } from "react";
import { Header } from "../components";
import { chan1, chan2, chan3 } from "../imgs";

const Mypage = ({ user, setUser, users, profile, setProfile }) => {
    const pw = user.password;
    const e_mail = user.email;

    const [password, setPassword] = useState(pw);
    const pw_input = (e) => {
        setPassword(e.target.value);
    };
    const [email, setEmail] = useState(e_mail);
    const email_input = (e) => {
        setEmail(e.target.value);
    };
    // const img_input = (e) => {
    //     setProfile(e.target.value);
    // };

    const id = user.id;
    function change() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                setUser(users.splice(i, 1));
                setUser([...users, { id, password, email, profile }]);
                return;
            }
        }
    }

    function profile_change1() {
        setProfile(chan1);
    }
    function profile_change2() {
        setProfile(chan2);
    }
    function profile_change3() {
        setProfile(chan3);
    }

    return (
        <div>
            <Header />
            <div>
                <div className="mypage">
                    <div className="profile">
                        <div>
                            <img src={profile} alt="프로필 이미지" />
                        </div>
                        {/* <input type="file" onChange={img_input} /> */}
                        <div onClick={profile_change1}>사진1</div>
                        <div onClick={profile_change2}>사진2</div>
                        <div onClick={profile_change3}>사진3</div>
                    </div>
                    <div className="change">
                        <div className="myid">
                            <p>
                                <div>아이디</div>
                                <div className="before">{user.id}</div>
                            </p>
                        </div>
                        <div className="mypw">
                            <p>
                                <div>비밀번호</div>
                                <div className="change_txt">
                                    변경할 비밀번호를 입력하세요
                                </div>
                                <input onChange={pw_input} type="password" />
                            </p>
                        </div>
                        <div className="mymail">
                            <p>
                                <div>이메일</div>
                                <div className="before">{user.email}</div>
                                <div className="change_txt">
                                    변경할 이메일주소를 입력하세요
                                </div>
                                <input onChange={email_input} />
                            </p>
                        </div>
                        <button onClick={change}>변경</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
