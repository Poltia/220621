import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockAction } from "../redux/middleware/BlockAction";
import { MinerAction } from "../redux/middleware/MinerAction";
import NumberList from "../components/NumberList";
import { useNavigate } from "react-router-dom";

const Main = () => {
    // Hook 불러오기
    const nav = useNavigate();
    const dispatch = useDispatch();

    // 블록 번호 목록 할당
    const numberList = useSelector((state) => state.BlockList.numberList);

    // 조회할 블록 번호 받을 부분
    const [number, setNumber] = useState();
    const lookupNumber = (e) => {
        setNumber(e.target.value);
    };
    // 조회버튼 클릭 함수
    const lookupBtn = () => {
        dispatch(BlockAction.lookupBlock(number, nav));
    };

    // Mining 시작 버튼 클릭 함수
    const minerStart = () => {
        dispatch(MinerAction.start());
    }
    
    // mining 활성화 확인 변수
    const mining = useSelector((state)=>state.Mining.mining);

    // 처음 랜더링할때
    useEffect(() => {
        // 블록 번호 목록 리덕스에 담기
        dispatch(BlockAction.numberList());
    }, []);

    return (
        <>
            <div>
                <button onClick={minerStart}>Mining 시작</button>
                <button>Mining 중지</button>
            </div>
            <div>최신 블록</div>
            <div>
                {numberList.map((el, index) => (
                    <NumberList key={index} block={el} />
                ))}
            </div>
            <div>
                <div>조회할 블록 번호</div>
                <input type="number" onChange={lookupNumber} />
                <button onClick={lookupBtn}>조회</button>
            </div>
        </>
    );
};

export default Main;
