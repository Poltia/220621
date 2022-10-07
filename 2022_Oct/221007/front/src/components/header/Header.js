import React, { useRef, useState } from "react";
import { Button, ContentBtn, HeaderContent, HeaderWrap, LoginInput, LoginWrap } from "./styledComponent";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/middleware/loginAction";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ isLogin }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    // 리액트에서 태그를 선택해야할때 사용
    // useRef()는 current 속성을 가지고 있는 객체를 반환한다.
    // 객체에 원하는 키값에 값을 넣어줄 수도 있고.
    // 이 값이 바뀌어도 렌더링은 되지않지만 값은 계속 남아있다.
    // current => 태그가 들어온다.
    // 사용방법은 들고있고싶은 컴포넌트에 props ref로 useRef()로 반환한 객체를 넣어준다.
    const idInput = useRef();
    const passwordInput = useRef();
    // 로그인 할 수 있는 상태와 회원가입 할 수 있는 상태를 나눠주기 위해서
    const [wrapState, setWrapState] = useState(true);
    const userName = useSelector((state) => state.loginReducer.id);

    const login = () => {
        dispatch(loginAction.login(idInput.value, passwordInput.value));
        /*
        // document.querySelector('태그').value = "";
        // document.querySelector('태그') 까지가 (...).current 랑 같음!!!
        idInput.current.value = "";
        passwordInput.current.value = "";*/
    };

    const logout = () => {
        dispatch(loginAction.logout());
    };

    const signUp = () => {
        dispatch(loginAction.signUp(idInput.value, passwordInput.value, setWrap));
    };

    const setWrap = () => {
        setWrapState(!wrapState);
        idInput.value = "";
        passwordInput.value = "";
        idInput.current.value = "";
        passwordInput.current.value = "";
    };

    return (
        <HeaderWrap>
            <HeaderContent>
                <ContentBtn
                    onClick={() => {
                        nav("/");
                    }}
                >
                    MAIN
                </ContentBtn>
                <ContentBtn
                    onClick={() => {
                        nav("/shop");
                    }}
                >
                    SHOP
                </ContentBtn>
            </HeaderContent>
            <LoginWrap>
                {isLogin ? (
                    <>
                        <div>{userName} 로그인됨</div>
                        <Button onClick={logout}>로그아웃</Button>
                    </>
                ) : (
                    <>
                        {wrapState ? (
                            <>
                                <label>ID : </label>
                                <LoginInput
                                    ref={idInput}
                                    onChange={(e) => {
                                        idInput.value = e.target.value;
                                    }}
                                />
                                <label>PASSWORD : </label>
                                <LoginInput
                                    ref={passwordInput}
                                    onChange={(e) => {
                                        passwordInput.value = e.target.value;
                                    }}
                                />
                                <Button onClick={login}>Login</Button>
                                <Button onClick={setWrap}>Go to Signup</Button>
                            </>
                        ) : (
                            <>
                                <label>ID : </label>
                                <LoginInput
                                    ref={idInput}
                                    onChange={(e) => {
                                        idInput.value = e.target.value;
                                    }}
                                />
                                <label>PASSWORD : </label>
                                <LoginInput
                                    ref={passwordInput}
                                    onChange={(e) => {
                                        passwordInput.value = e.target.value;
                                    }}
                                />
                                <Button onClick={signUp}>Signup</Button>
                                <Button onClick={setWrap}>Go to Login</Button>
                            </>
                        )}
                    </>
                )}
            </LoginWrap>
        </HeaderWrap>
    );
};

export default Header;
