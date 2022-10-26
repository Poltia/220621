import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/middleware/loginAction";
import { HeaderWrap, ContentsWrap, Content, User, Hover } from "../styles/HeaderStyle";

const Header = ({ removeCookie }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(loginAction.logout(removeCookie, nav));
        sessionStorage.removeItem("accessToken");
        alert("로그아웃 되었습니다.");
    };

    const id = sessionStorage.getItem("userID");
    const isLogin = useSelector((state) => state.login.isLogin);

    // 마우스오버시 사용할 변수 설정
    const [close, setClose] = useState(true);

    return (
        <HeaderWrap>
            <Content onClick={() => nav("/")}>메인</Content>
            <ContentsWrap>
                <Content
                    className={`list ${close ? "close" : "open"}`}
                    onMouseOver={() => {
                        setClose(false);
                    }}
                    onMouseLeave={() => {
                        setClose(true);
                    }}
                >
                    패키지
                    {!close && (
                        <Hover className="package">
                            <div
                                onMouseOver={() => {
                                    setClose(false);
                                }}
                                onMouseLeave={() => {
                                    setClose(true);
                                }}
                                onClick={() => {
                                    nav("/jejupackage");
                                }}
                            >
                                제주
                            </div>
                            <div
                                onMouseOver={() => {
                                    setClose(false);
                                }}
                                onMouseLeave={() => {
                                    setClose(true);
                                }}
                                onClick={() => {
                                    nav("/yangpackage");
                                }}
                            >
                                양양
                            </div>
                        </Hover>
                    )}
                </Content>
                <Content onClick={() => nav("/air")}>항공</Content>
                <Content onClick={() => nav("/hotel")}>호텔</Content>
                <Content onClick={() => nav("/review")}>후기</Content>
            </ContentsWrap>
            <ContentsWrap>
                {/* <Content
                    onClick={isLogin ? nav("inquire") : alert("로그인 후 이용해주세요.")}
                >
                    문의
                </Content> */}
                {isLogin ? (
                    <>
                        <User onClick={() => nav("/mypage")}>{id}</User>
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
