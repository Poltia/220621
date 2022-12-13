import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlockAction } from "../redux/middleware/BlockAction";

const NumberList = ({ block }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(BlockAction.BlockInfo(block.number, nav));
    };

    return <li onClick={onClick}>block number : {block.number}</li>;
};

export default NumberList;
