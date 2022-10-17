import styled from "styled-components";
import { Swiper } from "swiper/react";

const StyledSwiper = styled(Swiper)`
    position: relative;
    width: 99%;
    height: calc(100vh - 55px);
`;

const SlideWrap = styled.div`
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 90%;
    cursor: pointer;
`;

const Jeju = styled.img`
    width: 31vw;
    position: absolute;
    top: 2vw;
    left: 0;
`;
const Yang = styled.img`
    width: 31vw;
    position: absolute;
    bottom: 2vw;
    right: 0;
`;
const Air = styled.img`
    width: 39vw;
    position: absolute;
    top: 2vw;
    left: 0;
`;
const Move = styled.img`
    width: 31vw;
    position: absolute;
    bottom: 2vw;
    right: 0;
`;
const Jejutel = styled.img`
    width: 31vw;
    position: absolute;
    top: 2vw;
    left: 0;
`;
const Yangtel = styled.img`
    width: 31vw;
    position: absolute;
    bottom: 2vw;
    right: 0;
`;

const LeftText = styled.div`
    position: absolute;
    top: 12vw;
    left: 17vw;
    font-size: 3.8vw;
    background-color: white;
    opacity: 0.75;
    padding: 0 1.5vw;
    border-radius: 2.6vw;
`;
const RightText = styled.div`
    position: absolute;
    bottom: 12vw;
    right: 17vw;
    font-size: 3.8vw;
    background-color: white;
    opacity: 0.75;
    padding: 0 1.5vw;
    border-radius: 2.6vw;
`;

export {
    StyledSwiper,
    Jeju,
    Yang,
    Air,
    Move,
    Jejutel,
    Yangtel,
    SlideWrap,
    LeftText,
    RightText,
};
