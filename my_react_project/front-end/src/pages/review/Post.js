import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/CommonStyle";
import { PostWrap, Header, Info, Content } from "../../styles/PostStyle";

const Post = () => {
    // Hook 할당
    const nav = useNavigate();
    const list = useSelector((state) => state.list.list);
    const index = useSelector((state) => state.list.indexNum);

    return (
        <PostWrap>
            <Header>
                <Info>
                    <div>{list[index].title}</div>
                    <div>
                        <div>작성자 : {list[index].writer}</div>
                    </div>
                </Info>
                <Content>{list[index].content}</Content>
            </Header>
            <Button
                onClick={() => {
                    nav("/review");
                }}
            >
                글목록
            </Button>
        </PostWrap>
    );
};

export default Post;
