import styled from "styled-components";

const HotelWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;
const Left = styled.div`
    width: 35vw;
    height: 80vh;
    & > h1 {
        display: flex;
    }
`;
const Select = styled.select`
    font-size: 1.5vw;
    width: 10vw;
    height: 5vh;
`;
const TelImg = styled.img`
    width: 29vw;
`;
const Right = styled.div`
    position: relative;
    width: 35vw;
    & > div {
        display: flex;
        align-items: center;
    }
    & > button {
        position: absolute;
        bottom: 20vh;
    }
`;

const Reserved = styled.div`
    height: 30vh;
    font-size: 3vw;
    margin: 0 0 0 3vw;
`;

export { HotelWrap, Select, Left, Right, TelImg, Reserved };
