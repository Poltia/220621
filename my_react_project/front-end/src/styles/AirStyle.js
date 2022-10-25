import styled from "styled-components";

const AirWrap = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80vw;
    border: 1px solid black; //테두리
`;

const Left = styled.div`
    position: relative;
    border: 1px solid black;
    width: 40vw;
    height: 75vh;
`;

const Select = styled.select``;
const Date = styled.input``;
const AirImg = styled.img`
    width: 39vw;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Right = styled.div`
    border: 1px solid black; //테두리
    width: 40vw;
    & > div {
        position: relative;
        border: 1px solid gray;
        border-radius: 1vw;
        height: 30vh;
        font-size: 3vw;
        margin: 0 3vw 3vw;
    }
`;

const Reserved = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    display: flex;
    flex-wrap: wrap;
`;

const Block = styled.div`
    border: 1px solid gray;
    border-radius: 1vw;
    font-size: 10px; ////
    width: 2.5vw;
    height: 2.5vw;
    text-align: center;
    &:hover {
        cursor: pointer;
        background: lightgray;
        transition: 0.1;
    }
`;

const HiddenBlock = styled.div`
    border: 1px solid black;
    font-size: 10px; //
    width: 2.5vw;
    height: 2.5vw;
`;

const ReservedBlock = styled.div`
    border: 1px solid gray;
    border-radius: 1vw;
    background: red;
    font-size: 10px; //
    width: 2.5vw;
    height: 2.5vw;
`;

export {
    AirWrap,
    Left,
    Right,
    Select,
    Date,
    Reserved,
    Block,
    HiddenBlock,
    ReservedBlock,
    AirImg,
};
