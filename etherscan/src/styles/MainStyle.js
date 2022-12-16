import styled from "styled-components";

const MainWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    width: 98%;
    height: 90%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
`;

const BlockNumber = styled.div`
    &:hover {
        cursor: pointer;
        color: skyblue;
        transition: 0.1s;
    }
`;

const MiningStart = styled.div`
    font-size: 10vh;
    width: 98%;
    height: 35vh;
    text-align: center;
    line-height: 35vh; // 크기를 height와 똑같이 설정하면 문자열이 세로 가운데 정렬이 된다.
    background-color: lightgreen;
    border-radius: 10vh;
    &:hover {
        cursor: pointer;
        background-color: green;
        transition: 0.5s;
    }
`;
const MiningStop = styled.div`
    font-size: 10vh;
    width: 98%;
    height: 35vh;
    text-align: center;
    line-height: 35vh; // 크기를 height와 똑같이 설정하면 문자열이 세로 가운데 정렬이 된다.
    background-color: pink;
    border-radius: 10vh;
    &:hover {
        cursor: pointer;
        background-color: red;
        transition: 0.5s;
    }
`;

const LookupWrap = styled.div`
    margin-top: 7vh;
    & > div {
        font-size: 4vh;
        margin-bottom: 1vh;
    }
    & > input {
        font-size: 3vh;
    }
    & > span {
        cursor: pointer;
        font-size: 3vh;
        background-color: lightgray;
        padding: 0.5vh;
        margin-left: 0.5vw;
        border-radius: 0.5vh;
        &:hover {
            background-color: gray;
            transition: 0.1s;
        }
    }
`;

export { MainWrap, Left, Right, BlockNumber, MiningStart, MiningStop, LookupWrap };
