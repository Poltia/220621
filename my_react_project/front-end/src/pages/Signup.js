import { SignupWrap } from "../styles/SignupStyle";
import { Title, Button } from "../styles/CommonStyle";
import { loginAction } from "../redux/middleware/loginAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
    const [id, setId] = useState("");
    const idInput = (e) => {
        setId(e.target.value);
    };
    const [password, setPassword] = useState("");
    const pwInput = (e) => {
        setPassword(e.target.value);
    };
    const [checkPw, setCheckPw] = useState("");
    const checkInput = (e) => {
        setCheckPw(e.target.value);
    };
    const [phone, setPhone] = useState("");
    const phInput = (e) => {
        setPhone(e.target.value);
    };
    const [email, setEmail] = useState("");
    const emailInput = (e) => {
        setEmail(e.target.value);
    };

    const nav = useNavigate();
    const dispatch = useDispatch();

    const _signup = () => {
        dispatch(loginAction.signup(id, password, phone, email));
        nav("/login");
    };

    const check = () => {
        let regID = /^[a-z0-9ㄱ-힣]{3,8}/g;
        let _id = regID.test(id);
        if (_id === false) alert("아이디를 형식에 맞게 입력해주세요.");

        let regPW = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        let _pw = regPW.test(password);
        if (_pw === false) alert("비밀번호를 형식에 맞게 입력해주세요.");
        else if (password !== checkPw) alert("동일한 비밀번호를 입력해주세요.");

        let regPh = /^010(?:\d{3}|\d{4})\d{4}$/;
        let _phone = regPh.test(phone);
        if (_phone === false) alert("전화번호를 확인하고 입력해주세요.");

        let regMail =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        let _email = regMail.test(email);
        if (_email === false) alert("이메일을 형식에 맞게 입력해주세요.");

        if (_id === true && _pw === true && _phone === true && _email === true) {
            return _signup();
        }
    };

    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return check();
        }
    };

    return (
        <SignupWrap>
            <Title>회원 가입</Title>
            <label>아이디</label>
            <br />
            <input
                onChange={idInput}
                placeholder="3~8자 한글 영문"
                onKeyPress={enterKeyPress}
            />
            <br />
            <label>비밀번호</label>
            <br />
            <input
                type="password"
                onChange={pwInput}
                placeholder="8~16자 영문 숫자 특수문자"
                onKeyPress={enterKeyPress}
            />
            <br />
            <input
                type="password"
                onChange={checkInput}
                placeholder="비밀번호를 다시 입력해 주세요"
                onKeyPress={enterKeyPress}
            />
            <br />
            <label>전화번호</label>
            <br />
            <input
                type="phone"
                onChange={phInput}
                placeholder="숫자만 입력"
                onKeyPress={enterKeyPress}
            />
            <br />
            <label>E-mail</label>
            <br />
            <input
                type="email"
                onChange={emailInput}
                placeholder="이메일 주소 입력"
                onKeyPress={enterKeyPress}
            />
            <br />
            <Button onClick={check}>가입</Button>
        </SignupWrap>
    );
};

export default Signup;
