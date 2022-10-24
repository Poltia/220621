import React, { useState } from "react";
import {
    MyWrap,
    Left,
    Right,
    Title,
    Label,
    Input,
    Wrap,
    Select,
    Reserved,
    RightWrap,
} from "../styles/MypageStyle";
import { Button } from "../styles/CommonStyle";
import { useDispatch, useSelector } from "react-redux";
import { mypageAction } from "../redux/middleware/mypageAction";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
    // Hook 할당
    const dispatch = useDispatch();
    const nav = useNavigate();

    // input 받아오기
    const [password, setPassword] = useState("");
    const pw_input = (e) => {
        setPassword(e.target.value);
    };
    const [checkPW, setCheckPW] = useState("");
    const checkPW_input = (e) => {
        setCheckPW(e.target.value);
    };
    const [phone, setPhone] = useState("");
    const phone_input = (e) => {
        setPhone(e.target.value);
    };
    const [mail, setMail] = useState("");
    const mail_input = (e) => {
        setMail(e.target.value);
    };
    const [selected, setSelected] = useState("");
    const select = (e) => {
        setSelected(e.target.value);
    };
    const email = mail + "@" + selected;

    const id = sessionStorage.getItem("userID");
    // 버튼 클릭 실행 함수
    const pw_click = () => {
        let regPW = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        let _pw = regPW.test(password);
        if (_pw === false) alert("비밀번호를 형식에 맞게 입력해주세요.");
        else if (password === checkPW) {
            dispatch(mypageAction.password_change(id, password, nav));
        } else {
            alert("비밀번호를 동일하게 입력해 주세요.");
        }
    };
    const phone_click = () => {
        let regPh = /^010(?:\d{3}|\d{4})\d{4}$/;
        let _phone = regPh.test(phone);
        if (_phone === false) {
            alert("전화번호를 확인하고 입력해주세요.");
        } else {
            dispatch(mypageAction.phone_change(id, phone, nav));
        }
    };
    const email_click = () => {
        let regMail =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        let _email = regMail.test(email);
        if (_email === false) {
            alert("이메일을 다시 입력해주세요.");
        } else {
            dispatch(mypageAction.email_change(id, email, nav));
        }
    };

    // 로그인유저 정보 불러오기
    dispatch(mypageAction.get_userInfo(id));
    const user = useSelector((state) => state.userInfo);

    // 예약취소 버튼 함수
    const package_cancel = () => {
        dispatch(mypageAction.package_cancel(id));
    };
    const air_cancel = () => {
        dispatch(mypageAction.air_cancel(id));
    };
    const hotel_cancel = () => {
        dispatch(mypageAction.hotel_cancel(id));
    };

    return (
        <MyWrap>
            <Left>
                <Title>회원 정보</Title>
                <Wrap>
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        onChange={pw_input}
                        placeholder="8~16자 영문 숫자 특수문자"
                    />
                    <Input
                        type="password"
                        onChange={checkPW_input}
                        placeholder="위와 동일한 비밀번호를 입력해 주세요"
                    />
                    <Button onClick={pw_click}>변경하기</Button>
                </Wrap>
                <Wrap>
                    <Label>
                        전화번호
                        <div>0{user.phone}</div>
                    </Label>
                    <Input onChange={phone_input} placeholder="숫자만 입력" />
                    <Button onClick={phone_click}>변경하기</Button>
                </Wrap>
                <Wrap>
                    <Label>
                        이메일
                        <div>{user.email}</div>
                    </Label>
                    <div>
                        <Input onChange={mail_input} />@
                        <Select onChange={select}>
                            <option value="">--선택--</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                        </Select>
                    </div>
                    <Button onClick={email_click}>변경하기</Button>
                </Wrap>
            </Left>

            <Right>
                <Title>예약 정보</Title>
                <RightWrap>
                    {user.package && (
                        <Wrap>
                            <Label>패키지</Label>
                            {user.packge === "제주1d" ? (
                                <Reserved>제주 당일치기</Reserved>
                            ) : user.package === "제주2d" ? (
                                <Reserved>제주 1박2일</Reserved>
                            ) : user.package === "제주3d" ? (
                                <Reserved>제주 2박3일</Reserved>
                            ) : user.package === "양양1d" ? (
                                <Reserved>양양 당일치기</Reserved>
                            ) : user.package === "양양2d" ? (
                                <Reserved>양양 1박2일</Reserved>
                            ) : user.package === "양양3d" ? (
                                <Reserved>양양 2박3일</Reserved>
                            ) : (
                                ""
                            )}
                            <Button onClick={package_cancel}>예약 취소</Button>
                        </Wrap>
                    )}
                    {user.air && (
                        <Wrap>
                            <Label>항공</Label>
                            <Reserved>air : {user.air}</Reserved>
                            <Button onClick={air_cancel}>예약 취소</Button>
                        </Wrap>
                    )}
                    {user.hotel && (
                        <Wrap>
                            <Label>호텔</Label>
                            {user.hotel === "jeju1d" ? (
                                <Reserved>제주 1박</Reserved>
                            ) : user.hotel === "jeju2d" ? (
                                <Reserved>제주 2박</Reserved>
                            ) : user.hotel === "jeju3d" ? (
                                <Reserved>제주 3박</Reserved>
                            ) : user.hotel === "yang1d" ? (
                                <Reserved>양양 1박</Reserved>
                            ) : user.hotel === "yang2d" ? (
                                <Reserved>양양 2박</Reserved>
                            ) : user.hotel === "yang3d" ? (
                                <Reserved>양양 3박</Reserved>
                            ) : (
                                ""
                            )}
                            <Button onClick={hotel_cancel}>예약 취소</Button>
                        </Wrap>
                    )}
                </RightWrap>
            </Right>
        </MyWrap>
    );
};

export default Mypage;
