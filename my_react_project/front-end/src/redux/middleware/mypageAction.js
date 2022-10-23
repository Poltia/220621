import axios from "axios";

// 비밀번호 변경
function password_change(id, password, nav) {
    return async (dispatch, getState) => {
        const pwChange = await axios({
            method: "post",
            url: "http://localhost:8000/pwchange",
            data: { id, password },
        });
        if (pwChange.data === true) {
            alert("비밀번호가 변경되었습니다.");
            nav("/");
        } else {
            alert("비밀번호 변경에 실패했습니다.");
        }
    };
}

// 전화번호 변경
function phone_change(id, phone, nav) {
    return async (dispatch, getState) => {
        const phoneChange = await axios({
            method: "post",
            url: "http://localhost:8000/phchange",
            data: { id, phone },
        });
        if (phoneChange.data === true) {
            alert("전화번호가 변경되었습니다.");
            nav("/");
        } else {
            alert("전화번호 변경에 실패했습니다.");
        }
    };
}

// 이메일 변경
function email_change(id, email, nav) {
    return async (dispatch, getState) => {
        const emailChange = await axios({
            method: "post",
            url: "http://localhost:8000/emailchange",
            data: { id, email },
        });
        if (emailChange.data === true) {
            alert("이메일이 변경되었습니다.");
            nav("/");
        } else {
            alert("이메일 변경에 실패했습니다.");
        }
    };
}

// DB에서 로그인한 유저정보 리듀서에 담기
function get_userInfo(id) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/getuserinfo",
            data: { id },
        });
        if (user.data) {
            const phone = user.data.phone;
            const email = user.data.email;
            dispatch({ type: "USER", payload: { phone, email } });
        }
    };
}

export const mypageAction = { password_change, phone_change, email_change, get_userInfo };
