import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TxAction } from "../redux/middleware/TxAction";
import { Tx } from "../styles/BlockStyle";


const TxList = ({ tx, index }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(TxAction.TxInfo(tx, nav));
    };

    return (
        <Tx onClick={onClick}>
            No.{index + 1} : {tx}
        </Tx>
    );
};

export default TxList;
