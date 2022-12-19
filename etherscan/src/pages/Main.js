import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockAction } from "../redux/middleware/BlockAction";
import { MinerAction } from "../redux/middleware/MinerAction";
import NumberList from "../components/NumberList";
import { useNavigate } from "react-router-dom";
import {
    MainWrap,
    Left,
    Right,
    MiningStart,
    MiningStop,
    LookupWrap,
} from "../styles/MainStyle";
import Web3 from "web3/dist/web3.min";

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

    // Mining start 버튼 클릭 함수
    const minerStart = () => {
        dispatch(MinerAction.start());
    };
    // Mining stop 버튼 클릭 함수
    const minerStop = () => {
        dispatch(MinerAction.stop());
    };

    // mining 활성화 확인 변수
    const mining = useSelector((state) => state.Mining.mining);

    // web3 생성 및 연결
    const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:9005"));
    // 새로운 블록 생성시
    web3.eth.subscribe("newBlockHeaders", function (error, result) {
        // 블록 번호 목록 리덕스에 담기
        dispatch(BlockAction.numberList());
    });

    // 처음 랜더링할때
    useEffect(() => {
        // 블록 번호 목록 리덕스에 담기
        dispatch(BlockAction.numberList());
        // 새로고침하면 miner.stop() 되게
        dispatch(MinerAction.stop());
    }, []);

    return (
        <MainWrap>
            <Left>
                <h1>Latest Block List (25)</h1>
                <div>
                    {numberList.map((el, index) => (
                        <NumberList key={index} block={el} />
                    ))}
                </div>
            </Left>
            <Right>
                {mining ? (
                    <MiningStop onClick={minerStop}>Mining Stop</MiningStop>
                ) : (
                    <MiningStart onClick={minerStart}>Mining Start</MiningStart>
                )}
                <LookupWrap>
                    <div>Enter the Block Number</div>
                    <input type="number" onChange={lookupNumber} />
                    <span onClick={lookupBtn}>Search</span>
                </LookupWrap>
            </Right>
        </MainWrap>
    );
};

export default Main;
