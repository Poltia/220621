import React from "react";
import { useDispatch } from "react-redux";
import { AirWrap, Left, Right, Select } from "../styles/AirStyle";

const Air = () => {
    // Hook 할당
    const dispatch = useDispatch();

    return (
        <AirWrap>
            <Left>
                <Select>
                    <option value="">--목적지--</option>
                    <option value="jeju">제주</option>
                    <option value="yang">양양</option>
                </Select>
                <Select>
                    <option value="">--시간--</option>
                    <option value="8">AM 8</option>
                    <option value="13">PM 1</option>
                    <option value="19">PM 7</option>
                </Select>
            </Left>
            <Right></Right>
        </AirWrap>
    );
};

export default Air;
