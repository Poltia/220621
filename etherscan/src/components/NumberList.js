import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlockAction } from "../redux/middleware/BlockAction";
import { BlockNumber } from "../styles/MainStyle";

const NumberList = ({ block }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(BlockAction.BlockInfo(block.number, nav));
    };

    return <BlockNumber onClick={onClick}>Block Number : {block.number}</BlockNumber>;
};

export default NumberList;
