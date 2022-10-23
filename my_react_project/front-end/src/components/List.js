import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TD, TD2 } from "../styles/ReviewStyle";

const List = ({ list, index }) => {
    // Hook 할당
    const nav = useNavigate();
    const dispatch = useDispatch();

    // list click 함수
    const title_click = () => {
        dispatch({ type: "SET_INDEX", payload: index });
        nav(`/post/?=${index}`);
    };

    return (
        <tr>
            <TD onClick={title_click}>{list.title}</TD>
            <TD2>{list.writer}</TD2>
        </tr>
    );
};

export default List;
