import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TxAction } from "../redux/middleware/TxAction";

const TxList = ({ tx, index }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(TxAction.TxInfo(tx, nav));
    };

    return (
        <div onClick={onClick}>
            {index + 1} : {tx}
        </div>
    );
};

export default TxList;
