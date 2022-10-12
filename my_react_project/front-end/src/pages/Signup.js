import { SignupWrap } from "../styles/SignupStyle";
import { Title, Button } from "../styles/CommonStyle";
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
        
    }

    return (
        <SignupWrap>
            <Title>회원 가입</Title>
            <label>아이디</label>
            <br />
            <input onChange={idInput} />
            <br />
            <label>비밀번호</label>
            <br />
            <input type="password" onChange={pwInput} />
            <br />
            <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
            <br />
            <label>전화번호</label>
            <br />
            <input type="phone" onChange={phInput} />
            <br />
            <label>E-mail</label>
            <br />
            <input type="email" onChange={emailInput} />
            <br />
            <Button>가입</Button>
        </SignupWrap>
    );
};

export default Signup;
