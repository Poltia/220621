import axios from "axios";

function login(id, password, nav, setCookie) {
    return async (dispatch, getState) => {
        let duration = new Date();
        const time = 1;
        duration.setTime(duration.getTime() + time * 24 * 60 * 60 * 1000);

        const user = await axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: { id, password },
        });
        if (user.data.isLogin) {
            dispatch({ type: "LOGIN", payload: { id } });

            // 세션에 access token, userID, 로그인여부 저장
            sessionStorage.setItem("accessToken", user.data.session.access_token);
            sessionStorage.setItem("userID", id);
            sessionStorage.setItem("isLogin", true);

            // refresh token 쿠키에 저장
            const refresh_token = user.data.session.refresh_token;
            setCookie("refreshToken", refresh_token, { path: "/", expires: duration });

            nav("/");
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    };
}

function logout(removeCookie) {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT" });
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("userID");
        sessionStorage.removeItem("isLogin");
        removeCookie("refreshToken");
    };
}

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

export const loginAction = { login, logout, signup };
