import { useNavigate } from "react-router-dom";
import { HeaderWrap, ContentsWrap, Content } from "../styles/HeaderStyle";

const Header = () => {
    const nav = useNavigate();

    return (
        <HeaderWrap>
            <Content onClick={() => nav("/")}>메인</Content>
            <ContentsWrap>
                <Content>패키지</Content>
                <Content>항공</Content>
                <Content>호텔</Content>
            </ContentsWrap>
            <ContentsWrap>
                <Content>문의</Content>
                <Content>My</Content>
                <Content onClick={() => nav("/login")}>로그인</Content>
                <Content onClick={() => nav("/signup")}>회원가입</Content>
                <Content>로그아웃</Content>
            </ContentsWrap>
        </HeaderWrap>
    );
};

export default Header;
