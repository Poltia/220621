import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/middleware/loginAction";
import { HeaderWrap, ContentsWrap, Content, User } from "../styles/HeaderStyle";

const Header = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(loginAction.logout());
        alert("로그아웃 되었습니다.");
    };

    const isLogin = useSelector((state) => state.login.isLogin);
    const userID = useSelector((state) => state.login.id);

    return (
        <HeaderWrap>
            <Content onClick={() => nav("/")}>메인</Content>
            <ContentsWrap>
                <Content
                    onClick={() => {
                        nav("/package");
                    }}
                >
                    패키지
                </Content>
                <Content onClick={() => nav("/air")}>항공</Content>
                <Content onClick={() => nav("/hotel")}>호텔</Content>
                <Content onClick={() => nav("/review")}>후기</Content>
            </ContentsWrap>
            <ContentsWrap>
                <Content>문의</Content>
                {isLogin ? (
                    <>
                        <User onClick={() => nav("/mypage")}>{userID}</User>
                        <Content onClick={logout}>로그아웃</Content>
                    </>
                ) : (
                    <>
                        <Content onClick={() => nav("/login")}>로그인</Content>
                        <Content onClick={() => nav("/signup")}>회원가입</Content>
                    </>
                )}
            </ContentsWrap>
        </HeaderWrap>
    );
};

export default Header;
