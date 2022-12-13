import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockAction } from "../redux/middleware/BlockAction";
import NumberList from "../components/NumberList";

const Main = () => {
    const dispatch = useDispatch();

    // 블록 번호 목록
    const numberList = useSelector((state) => state.BlockList.numberList);

    // 처음 랜더링할때
    useEffect(() => {
        // 블록 번호 목록 리덕스에 담기
        dispatch(BlockAction.numberList());
    }, []);

    return (
        <>
            <div>
                <button>Mining 시작</button>
                <button>Mining 중지</button>
            </div>
            <div>블록 조회하기</div>
            <div>
                {numberList.map((el, index) => (
                    <NumberList key={index} block={el} />
                ))}
            </div>
            <div>
                <div>조회할 블록 번호</div>
                <input type="number" />
                <button>조회</button>
            </div>
        </>
    );
};

export default Main;
