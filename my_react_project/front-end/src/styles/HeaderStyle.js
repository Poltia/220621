import styled from "styled-components";

const HeaderWrap = styled.div`
    width: 100%;
    height: 6vh;
    background-color: #f2f2f2;
    border-bottom: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* position: fixed; */
`;

const User = styled.div`
    cursor: pointer;
    width: 80px;
    border-radius: 20px;
    padding: 10px 0;
    &:hover {
        color: gray;
        background-color: white;
        transition: 0.3s;
    }
`;

const ContentsWrap = styled.div`
    display: flex;
`;

const Content = styled.div`
    cursor: pointer;
    width: 5.8vw;
    border-radius: 0.5vw;
    padding: 0.7vw 0;
    position: relative;

    &:hover {
        color: white;
        background-color: lightgray;
    }
`;

const Hover = styled.div`
    position: absolute;
    left: 0;
    bottom: -5.9vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 10vw;
    height: 6vh;
    background-color: gray;
    z-index: 2;
`;

export { HeaderWrap, ContentsWrap, Content, User, Hover };
