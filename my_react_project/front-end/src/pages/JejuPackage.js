import React, { useEffect, useState } from "react";
import { Title, Button } from "../styles/CommonStyle";
import {
    JejuImg,
    Left,
    PackageWrap,
    Right,
    Select,
    Selected,
    ReservNotice,
} from "../styles/PackageStyle";
import { jeju } from "../imgs";
import { useDispatch, useSelector } from "react-redux";
import { reservAction } from "../redux/middleware/reservAction";
import { useNavigate } from "react-router-dom";

const Package = () => {
    const [selected, setSelected] = useState("");
    function selectChangeHandler(e) {
        setSelected(e.target.value);
    }

    // use 할당
    const nav = useNavigate();
    const dispatch = useDispatch();

    // 예약하기
    const reserv = () => {
        dispatch(reservAction.jeju_package(selected, nav));
    };

    // 예약 현황 디브 숨겼다가 클릭하면 보여주기
    const [hide, setHide] = useState(true);

    // 예약확인하기
    const check = () => {
        setHide(false);
        dispatch(reservAction.jeju_package_check(selected));
    };

    // 리덕스에 있는 저장인수 가져오기
    const reservedNum = useSelector((state) => state.reserved.jeju_package);

    return (
        <PackageWrap>
            <Left>
                <Title>제주 패키지</Title>
                <JejuImg src={jeju} alt="제주" />
            </Left>
            <Right>
                <Select className="select" onChange={selectChangeHandler}>
                    <option value="">--선택하기--</option>
                    <option value="1d">당일치기</option>
                    <option value="2d">1박 2일</option>
                    <option value="3d">2박 3일</option>
                </Select>
                <Selected>
                    {selected === "1d" ? (
                        <p>당일치기 선택</p>
                    ) : selected === "2d" ? (
                        <p>1박2일 선택</p>
                    ) : selected === "3d" ? (
                        <p>2박3일 선택</p>
                    ) : (
                        <p></p>
                    )}
                </Selected>
                <ReservNotice>
                    예약현황 <Button onClick={check}>확인</Button>
                    {!hide && (
                        <div>
                            <p>{reservedNum}/10</p>
                        </div>
                    )}
                </ReservNotice>
                <Button onClick={reserv}>예약하기</Button>
            </Right>
        </PackageWrap>
    );
};

export default Package;
