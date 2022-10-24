import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HotelWrap, Select, Left, Right, TelImg, Reserved } from "../styles/HotelStyle";
import { jeju_tel, yang_tel } from "../imgs";
import { Title, Button } from "../styles/CommonStyle";
import { reservAction } from "../redux/middleware/reservAction";

const Hotel = () => {
    // Hook 할당
    const dispatch = useDispatch();
    const nav = useNavigate();

    // 옵션 선택 value
    const [place, setPlace] = useState("");
    const place_selected = (e) => {
        setPlace(e.target.value);
    };
    const [day, setDay] = useState("");
    const day_selected = (e) => {
        setDay(e.target.value);
    };

    const [hide, setHide] = useState(true);

    const id = sessionStorage.getItem("userID");
    // 예약확인
    const check = () => {
        if (place === "") alert("지역을 선택해주세요.");
        else if (day === "") alert("숙박일수를 선택해주세요.");
        else {
            setHide(false);
            dispatch(reservAction.hotel_check(place, day));
        }
    };
    const number = useSelector((state) => state.reserved.hotel);
    // 예약하기
    const reserve = () => {
        if (place === "") alert("지역을 선택해주세요.");
        else if (day === "") alert("숙박일수를 선택해주세요.");
        else {
            dispatch(reservAction.hotel(id, place, day, nav));
        }
    };

    return (
        <HotelWrap>
            <Left>
                <div>
                    <Select onChange={place_selected}>
                        <option value="">--지역선택--</option>
                        <option value="jeju">제주</option>
                        <option value="yang">양양</option>
                    </Select>
                    &nbsp;
                    <Select onChange={day_selected}>
                        <option value="">--숙박일수--</option>
                        <option value="1d">1박</option>
                        <option value="2d">2박</option>
                        <option value="3d">3박</option>
                    </Select>
                </div>
                {place === "jeju" ? (
                    <Title>
                        제주&nbsp;
                        <div>
                            {day === "1d"
                                ? "1박"
                                : day === "2d"
                                ? "2박"
                                : day === "3d"
                                ? "3박"
                                : ""}
                        </div>
                    </Title>
                ) : place === "yang" ? (
                    <Title>
                        양양&nbsp;
                        <div>
                            {day === "1d"
                                ? "1박"
                                : day === "2d"
                                ? "2박"
                                : day === "3d"
                                ? "3박"
                                : ""}
                        </div>
                    </Title>
                ) : (
                    ""
                )}
                {place === "jeju" ? (
                    <TelImg src={jeju_tel} />
                ) : place === "yang" ? (
                    <TelImg src={yang_tel} />
                ) : (
                    ""
                )}
            </Left>
            <Right>
                <div>
                    <Title>예약 현황 &nbsp;</Title>
                    <Button onClick={check}>확인하기</Button>
                </div>
                {!hide && <Reserved>{number}/30</Reserved>}
                <Button onClick={reserve}>예약하기</Button>
            </Right>
        </HotelWrap>
    );
};

export default Hotel;
