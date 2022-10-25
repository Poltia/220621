import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reservAction } from "../redux/middleware/reservAction";
import {
    AirWrap,
    Left,
    Right,
    Select,
    Date,
    Reserved,
    Block,
    HiddenBlock,
    ReservedBlock,
    AirImg,
} from "../styles/AirStyle";
import { Title, Button } from "../styles/CommonStyle";
import { air } from "../imgs";

const Air = () => {
    // Hook 할당
    const dispatch = useDispatch();
    const nav = useNavigate();

    // input 받아오기
    const [destination, setDestination] = useState("");
    const destination_value = (e) => {
        setDestination(e.target.value);
    };
    const [date, setDate] = useState();
    const date_value = (e) => {
        setDate(e.target.value);
    };
    const [seat, setSeat] = useState();
    const seat_value = (e) => {
        setSeat(e.target.dataset.key);
        // console.log(e.target.dataset.key);
    };

    // 좌석 배열
    let seats = [
        [
            { num: 1, seat: "A1", reserved: false },
            { num: 1, seat: "A2", reserved: false },
            { num: 1, seat: "A3", reserved: false },
            { num: 1, seat: "A4", reserved: false },
            { num: 1, seat: "A5", reserved: false },
            { num: 1, seat: "A6", reserved: false },
            { num: 1, seat: "A7", reserved: false },
            { num: 1, seat: "A8", reserved: false },
            { num: 1, seat: "A9", reserved: false },
            { num: 1, seat: "A10", reserved: false },
            { num: 1, seat: "A11", reserved: false },
        ],
        [
            { num: 1, seat: "B1", reserved: false },
            { num: 1, seat: "B2", reserved: false },
            { num: 1, seat: "B3", reserved: false },
            { num: 1, seat: "B4", reserved: false },
            { num: 1, seat: "B5", reserved: false },
            { num: 1, seat: "B6", reserved: false },
            { num: 1, seat: "B7", reserved: false },
            { num: 1, seat: "B8", reserved: false },
            { num: 1, seat: "B9", reserved: false },
            { num: 1, seat: "B10", reserved: false },
            { num: 1, seat: "B11", reserved: false },
        ],
        [
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
            { num: 0, seat: "", reserved: false },
        ],
        [
            { num: 1, seat: "C1", reserved: false },
            { num: 1, seat: "C2", reserved: false },
            { num: 1, seat: "C3", reserved: false },
            { num: 1, seat: "C4", reserved: false },
            { num: 1, seat: "C5", reserved: false },
            { num: 1, seat: "C6", reserved: false },
            { num: 1, seat: "C7", reserved: false },
            { num: 1, seat: "C8", reserved: false },
            { num: 1, seat: "C9", reserved: false },
            { num: 1, seat: "C10", reserved: false },
            { num: 1, seat: "C11", reserved: false },
        ],
        [
            { num: 1, seat: "D1", reserved: false },
            { num: 1, seat: "D2", reserved: false },
            { num: 1, seat: "D3", reserved: false },
            { num: 1, seat: "D4", reserved: false },
            { num: 1, seat: "D5", reserved: false },
            { num: 1, seat: "D6", reserved: false },
            { num: 1, seat: "D7", reserved: false },
            { num: 1, seat: "D8", reserved: false },
            { num: 1, seat: "D9", reserved: false },
            { num: 1, seat: "D10", reserved: false },
            { num: 1, seat: "D11", reserved: false },
        ],
    ];

    const id = sessionStorage.getItem("userID");
    // 예약하기 클릭 함수
    const reserve = () => {
        if (!id) alert("로그인 후 이용해주세요.");
        else if (destination === "") alert("목적지를 선택해주세요.");
        else if (!date) alert("날짜를 선택해주세요.");
        else if (!seat) alert("좌석을 선택해주세요.");
        else dispatch(reservAction.air(id, destination, date, seat, nav));
    };
    // 예약확인 클릭 함수
    const reserved_check = () => {
        if (!id) alert("로그인 후 이용해주세요.");
        else if (!destination) alert("목적지를 선택해주세요.");
        else if (!date) alert("날짜를 선택해주세요.");
        dispatch(reservAction.air_check(destination, date));
    };
    const reserved = useSelector((state) => state.reserved);
    // console.log(reserved.air_date);
    // console.log(reserved.air_destination);
    // console.log(reserved.air_seat);
    return (
        <AirWrap>
            <Left>
                <Select onChange={destination_value}>
                    <option value="">--목적지--</option>
                    <option value="jeju">제주</option>
                    <option value="yang">양양</option>
                </Select>
                <Date onChange={date_value} type="date" />
                {destination && <div>목적지 : {destination}</div>}
                {date && <div>날짜 : {date}</div>}
                <AirImg src={air} alt="비행기" />
            </Left>
            <Right>
                <Title>
                    예약 현황&nbsp;
                    <Button onClick={reserved_check}>확인하기</Button>
                </Title>
                <Reserved>
                    {seats.map((el, index) => {
                        return el.map((e, index) => {
                            
                            <Block key={index}>{e.seat}</Block>;
                        });
                    })}
                </Reserved>
                <span>{seat}</span>
                <br />
                <Button onClick={reserve}>예약하기</Button>
            </Right>
        </AirWrap>
    );
};

export default Air;
