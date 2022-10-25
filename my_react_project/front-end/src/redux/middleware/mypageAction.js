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
            const _package = user.data.package;
            const air_date = user.data.air_date;
            const air_destination = user.data.air_destination;
            const air_seat = user.data.air_seat;
            const hotel = user.data.hotel;
            dispatch({
                type: "USER",
                payload: {
                    phone,
                    email,
                    _package,
                    air_date,
                    air_destination,
                    air_seat,
                    hotel,
                },
            });
        }
    };
}

// package 예약 취소
function package_cancel(id) {
    return async (dispatch, getState) => {
        const cancel = await axios({
            method: "post",
            url: "http://localhost:8000/packagecancel",
            data: { id },
        });
        if (cancel.data === true) {
            alert("패키지 예약이 취소되었습니다.");
        } else {
            alert("패키지 예약 취소가 되지 않았습니다.");
        }
    };
}
// air 예약 취소
function air_cancel(id) {
    return async (dispatch, getState) => {
        const cancel = await axios({
            method: "post",
            url: "http://localhost:8000/aircancel",
            data: { id },
        });
        if (cancel.data === true) {
            alert("항공 예약이 취소되었습니다.");
        } else {
            alert("항공 예약 취소가 되지 않았습니다.");
        }
    };
}
// hotel 예약 취소
function hotel_cancel(id) {
    return async (dispatch, getState) => {
        const cancel = await axios({
            method: "post",
            url: "http://localhost:8000/hotelcancel",
            data: { id },
        });
        if (cancel.data === true) {
            alert("호텔 예약이 취소되었습니다.");
        } else {
            alert("호텔 예약 취소가 되지 않았습니다.");
        }
    };
}

export const mypageAction = {
    password_change,
    phone_change,
    email_change,
    get_userInfo,
    package_cancel,
    air_cancel,
    hotel_cancel,
};
