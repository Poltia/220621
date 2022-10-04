import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { main_img, board_img, signup_img, login_img, logout } from "../imgs";

const Header = () => {
    const dispatch = useDispatch();
    const loginIs = useSelector((state) => state.loginis);

    const Logout = () => {
        if (loginIs == true) {
            dispatch({ type: "LOGIN_IS", payload: false });
            alert("로그아웃 되었습니다.");
        }
    };

    return (
        <div className="header">
            <div className="return_main">
                <Link to="/">
                    <img src={main_img} alt="메인으로" />
                </Link>
            </div>
            <div className="taps">
                <Link to="/board">
                    <img src={board_img} alt="게시판으로" />
                </Link>
            </div>
            <div className="members">
                <Link to="/mypage">My</Link>
                <Link to="/login">
                    <img src={login_img} alt="로그인으로" />
                </Link>
                {/* <div className="logout" onClick={Logout}>
                    <img src={logout} alt="Logout" />
                </div> */}
                <Link to="/signup">
                    <img src={signup_img} alt="회원가입으로" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
