import React from "react";
import { useNavigate } from "react-router-dom";

const List = ({ list, index, setIndexNum }) => {
    console.log("index : ", index);
    const nav = useNavigate();
    function next() {
        setIndexNum(index);
        nav(`/post/?=${index}`);
    }
    return (
        <tr>
            <td className="body_title" onClick={next}>
                {list.title}
            </td>
            <td className="body_writer">{list.name}</td>
        </tr>
    );
};

export default List;
