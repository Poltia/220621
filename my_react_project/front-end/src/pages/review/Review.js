import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    ReviewWrap,
    Table,
    Thead,
    HeadTitle,
    HeadWriter,
    Tbody,
} from "../../styles/ReviewStyle";
import { Button } from "../../styles/CommonStyle";
import { reviewAction } from "../../redux/middleware/reviewAction";
import { List } from "../../components";

const Review = () => {
    // Hook 할당 하기
    const nav = useNavigate();
    const dispatch = useDispatch();
    // 글 목록 불러오기
    const list = useSelector((state) => state.list.list);

    const id = sessionStorage.getItem("userID");
    // 글쓰기 버튼 클릭 함수
    const write = () => {
        if (id === null) {
            alert("로그인 후 이용 가능합니다.");
        } else {
            nav("/write");
        }
    };

    //랜더링 될때마다 데이터베이스에 있는 목록 불러와서 리듀서에 담게 하기
    useEffect(() => {
        dispatch(reviewAction.list());
    });

    return (
        <ReviewWrap>
            <Table>
                <Thead>
                    <tr>
                        <HeadTitle>제목</HeadTitle>
                        <HeadWriter>작성자</HeadWriter>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </Thead>
                <Tbody>
                    {list.reverse().map((el, index) => (
                        <List key={index} list={el} />
                    ))}
                </Tbody>
            </Table>
            <Button onClick={write}>글쓰기</Button>
        </ReviewWrap>
    );
};

export default Review;
