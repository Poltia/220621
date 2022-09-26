import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";

const Post = ({ list, indexNum, profile }) => {
    const nav = useNavigate();
    return (
        <>
            <Header />
            <div>
                <div className="post">
                    <div className="post_inner">
                        <div className="post_info">
                            <div className="post_title">
                                {list[indexNum].title}
                            </div>
                            <div className="post_writer">
                                <div className="profile_img">
                                    <img src={profile} alt="profile" />
                                </div>
                                <div>글쓴이 : {list[indexNum].name}</div>
                            </div>
                        </div>
                        <div className="post_write">{list[indexNum].write}</div>
                    </div>
                    <button
                        className="back_btn"
                        onClick={() => {
                            nav("/board");
                        }}
                    >
                        글목록
                    </button>
                </div>
            </div>
        </>
    );
};

export default Post;
