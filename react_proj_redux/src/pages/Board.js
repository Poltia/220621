import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, List } from "../components";

const Board = () => {
    const nav = useNavigate();
    const list = useSelector((state) => state.post_list);
    return (
        <>
            <Header />
            <div>
                <div className="board">
                    <table className="brd_table">
                        <thead className="brd_table_head">
                            <tr>
                                <td className="head_title">제목</td>
                                <td className="head_writer">작성자</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className="brd_table_body">
                            {list.map((el, index) => (
                                <List key={index} index={index} list={el} />
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={() => {
                            nav("/write");
                        }}
                    >
                        글쓰기
                    </button>
                </div>
            </div>
        </>
    );
};

export default Board;
