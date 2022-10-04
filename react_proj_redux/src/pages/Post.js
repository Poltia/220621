import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import { default_img } from "../imgs";

const Post = () => {
    const nav = useNavigate();
    const list = useSelector((state) => state.post_list);
    const index = useSelector((state) => state.indexNum);

    return (
        <>
            <Header />
            <div>
                <div className="post">
                    <div className="post_inner">
                        <div className="post_info">
                            <div className="post_title">
                                {list[index].title}
                            </div>
                            <div className="post_writer">
                                <div className="profile_img">
                                    <img
                                        src={
                                            list[index].profile == null
                                                ? default_img
                                                : list[index].profile
                                        }
                                        alt="profile"
                                    />
                                </div>
                                <div>글쓴이 : {list[index].writer.id}</div>
                            </div>
                        </div>
                        <div className="post_write">{list[index].write}</div>
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
