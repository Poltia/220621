import React from "react";
import { useSelector } from "react-redux";
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

const Review = () => {
    // use 할당 하기
    const nav = useNavigate();

    const id = sessionStorage.getItem("userID");
    const write = () => {
        console.log(id);
        if (id === null) {
            alert("로그인 후 이용 가능합니다.");
        } else {
            nav("/write");
        }
    };

    //랜더링 될때마다 데이터베이스에 있는 목록 불러와서 리듀서에 담게 하기!!!!!!!!!! 그래서 불러와가지고 요기밑에서 읽게 끔

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
                    {/* {list.map((el, index) => (
                            <List key={index} index={index} list={el} />
                        ))} */}
                </Tbody>
            </Table>
            <Button onClick={write}>글쓰기</Button>
        </ReviewWrap>
    );
};

export default Review;
