import styled from "styled-components";

const WriteWrap = styled.div`
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;
const WriteTitle = styled.input`
    font-size: 2.5vw;
    width: 70vw;
`;
const Text = styled.textarea`
    font-size: 2vw;
    height: 500px;
    overflow: scroll;
`;
const Btns = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.9vw;
    padding: 5px;
    margin: 0 5vw;
`;
export { WriteWrap, WriteTitle, Text, Btns };
