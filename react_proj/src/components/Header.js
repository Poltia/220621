import React from "react";
import { Link } from "react-router-dom";
import { main_img, board_img, signup_img, login_img } from "../imgs";

const Header = () => {
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
                <Link to="/signup">
                    <img src={signup_img} alt="회원가입으로" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
