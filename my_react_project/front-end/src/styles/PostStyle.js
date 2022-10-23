import styled from "styled-components";

const PostWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 85vh;
    button {
        position: absolute;
        right: 7vw;
        bottom: 0;
    }
`;

const Header = styled.div`
    position: relative;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
    width: 60vw;
    max-height: 71.8vh;
    overflow: scroll;
`;

const Info = styled.div`
    font-size: 1.8vw;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    height: 31vw;
    font-size: 1.3vw;
    margin-top: 1.2vw;
    border: 1px solid darkgray;
    border-radius: 0.5vw;
`;

export { PostWrap, Header, Info, Content };
