import styled from "styled-components";

const AirWrap = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80vw;
`;

const Left = styled.div`
    position: relative;
    width: 40vw;
    height: 75vh;
`;

const Select = styled.select`
    font-size: 1.5vw;
    height: 5vh;
`;
const Date = styled.input`
    font-size: 1.5vw;
    height: 4.6vh;
`;
const Destination = styled.div`
    font-size: 1.5vw;
    margin: 1vh 0;
`;
const PickDate = styled.div`
    font-size: 1.5vw;
`;
const AirImg = styled.img`
    width: 39vw;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Right = styled.div`
    position: relative;
    width: 40vw;
    & > div {
        position: relative;
        border: 1px solid gray;
        border-radius: 1vw;
        height: 30vh;
        font-size: 3vw;
        margin: 0 3vw 3vw;
    }
    & > span {
        font-size: 2vw;
        position: absolute;
        left: 3vw;
        bottom: 20vh;
    }
    & > button {
        position: absolute;
        left: 3vw;
        bottom: 10vh;
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
    font-size: 10px; //
    width: 2.5vw;
    height: 2.5vw;
`;

const ReservedBlock = styled.div`
    color: white;
    border: 1px solid gray;
    border-radius: 1vw;
    background: red;
    font-size: 10px; //
    width: 2.5vw;
    height: 2.5vw;
    text-align: center;
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
    Destination,
    PickDate,
};
