import axios from "axios";

// 토큰 확인 요청 함수
function loginCheck(cookies, nav, id) {
    return async (dispatch, getState) => {
        // access 에 access token 할당
        const access = sessionStorage.getItem("accessToken");
        // refresh 에 refresh token 할당
        const refresh = cookies.refreshToken;
        const token = await axios({
            method: "post",
            url: "http://localhost:8000/tokencheck",
            data: { access, refresh },
        });
        // console.log("relogin : " + token.data.relogin);
        // console.log("access token : " + token.data?.session.access_token);
        if (token.data.relogin === true && refresh !== undefined) {
            alert("세션이 만료되어 다시 로그인후 이용해 주세요");
            nav("/login");
        } else if (
            token.data.relogin === false &&
            token.data.session.access_token !== undefined
        ) {
            sessionStorage.setItem("accessToken", token.data.session.access_token);
            dispatch({ type: "LOGIN", payload: { id } });
        }
    };
}

// 로그인시
function login(id, password, nav, setCookie) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: { id, password },
        });
        // 만료시킬 시간 변수에 담기
        let duration = new Date();
        const time = 1;
        duration.setTime(duration.getTime() + time * 24 * 60 * 60 * 1000);
        if (user.data.isLogin) {
            dispatch({ type: "LOGIN", payload: { id } });

            // 세션에 access token, userID, 로그인여부 저장
            sessionStorage.setItem("accessToken", user.data.session.access_token);
            sessionStorage.setItem("userID", id);
            // sessionStorage.setItem("isLogin", true);

            // refresh token 쿠키에 저장
            const refresh_token = user.data.session.refresh_token;
            setCookie("refreshToken", refresh_token, { path: "/", expires: duration });

            nav("/");
            alert(id + " 님 어서오세요");
        } else {
            alert("로그인 실패");
        }
    };
}

// 로그아웃시
function logout(removeCookie, nav) {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT" });
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("userID");
        removeCookie("refreshToken");
        nav("/");
    };
}

// 회원가입시
function signup(id, password, phone, email) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/signup",
            data: { id, password, phone, email },
        });
        alert(user.data);
    };
}

export const loginAction = { login, logout, signup, loginCheck };
