import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlockAction } from "../redux/middleware/BlockAction";

const NumberList = (list) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(BlockAction.BlockInfo(list.block.number, nav));
    };

    return <li onClick={onClick}>block number : {list.block.number}</li>;
};

export default NumberList;
