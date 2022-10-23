import { SignupWrap } from "../styles/SignupStyle";
import { Title, Button } from "../styles/CommonStyle";
import { loginAction } from "../redux/middleware/loginAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const Signup = () => {
    // input.value 받아오기
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
    const [mail, setMail] = useState("");
    const mailInput = (e) => {
        setMail(e.target.value);
    };
    const [email_, setEmail_] = useState("");
    const emailSelect = (e) => {
        setEmail_(e.target.value);
    };
    const email = mail + "@" + email_;

    // use 할당 하기
    const nav = useNavigate();
    const dispatch = useDispatch();

    // loginAction.js(미들웨어)에 input.value 보내는 함수
    const _signup = () => {
        dispatch(loginAction.signup(id, password, phone, email));
        nav("/login");
    };

    // 아이디 중복검사 하는 함수
    const checkID = async () => {
        let regID = /^[a-z0-9ㄱ-힣]{3,8}/g;
        let _id = regID.test(id);
        if (_id === false) alert("아이디를 형식에 맞게 입력해주세요.");
        else {
            const idcheck = await axios({
                method: "post",
                url: "http://localhost:8000/idcheck",
                data: { id },
            });
            if (!idcheck.data) alert("사용가능한 아이디입니다.");
            else alert("중복된 아이디입니다.");
        }
    };

    // 정규표현식 검사 함수
    const check = () => {
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
        if (_email === false) alert("이메일을 다시 입력해주세요.");

        if (_pw === true && _phone === true && _email === true) {
            return _signup();
        }
    };

    // enter 키로 정규표현식 검사함수 실행하게 하는 함수
    const enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return check();
        }
    };
    const id_enterKeyPress = (e) => {
        if (e.key === "Enter") {
            return checkID();
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
                onKeyPress={id_enterKeyPress}
            />
            <Button onClick={checkID}>중복확인</Button>
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
                placeholder="위와 동일한 비밀번호를 입력해 주세요"
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
                style={{ width: "13.5vw" }}
                type="text"
                onChange={mailInput}
                placeholder="이메일 주소 입력"
                onKeyPress={enterKeyPress}
            />
            @
            <select onChange={emailSelect}>
                <option value="">선택</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
            </select>
            <br />
            <Button onClick={check}>가입</Button>
        </SignupWrap>
    );
};

export default Signup;
