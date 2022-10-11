import { SignupWrap } from "../styles/SignupStyle";
import { Title, Button } from "../styles/CommonStyle";

const Signup = () => {
    return (
        <SignupWrap>
            <Title>회원 가입</Title>
            <label>아이디</label>
            <br />
            <input />
            <br />
            <label>비밀번호</label>
            <br />
            <input type="password" />
            <br />
            <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
            <br />
            <label>전화번호</label>
            <br />
            <input type="phone" />
            <br />
            <label>E-mail</label>
            <br />
            <input type="email" />
            <br />
            <Button>가입</Button>
        </SignupWrap>
    );
};

export default Signup;
