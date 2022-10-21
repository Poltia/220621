import React, { useEffect, useState } from "react";
import { Title, Button } from "../styles/CommonStyle";
import {
    JejuImg,
    Left,
    PackageWrap,
    Right,
    Select,
    Selected,
} from "../styles/PackageStyle";
import { jeju } from "../imgs";

const Package = () => {
    const [selected, setSelected] = useState("1day");
    function selectChangeHandler(e) {
        setSelected(e.target.value);
    }
    useEffect(() => {
        console.log(selected);
    }, [selected]);

    // 예약하기 버튼 온클릭 함수 짜야돼!!!!!!!!
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
                    {selected === "1d"
                        ? "당일치기 선택"
                        : selected === "2d"
                        ? "1박2일 선택"
                        : selected === "3d"
                        ? "2박3일 선택"
                        : ""}
                </Selected>
                <Button>예약하기</Button>
            </Right>
        </PackageWrap>
    );
};

export default Package;
