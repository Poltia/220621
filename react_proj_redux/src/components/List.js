import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = ({ list, index }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    function post() {
        dispatch({ type: "SET_INDEX", payload: index });
        nav(`/post/?=${index}`);
    }

    return (
        <tr>
            <td className="body_title" onClick={post}>
                {list.title}
            </td>
            <td className="body_writer">{list.writer.id}</td>
        </tr>
    );
};

export default List;
