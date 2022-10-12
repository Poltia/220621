import styled from "styled-components";

const HeaderWrap = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    border-bottom: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: fixed; */
`;

const ContentsWrap = styled.div`
    display: flex;
`;

const Content = styled.div`
    cursor: pointer;
    width: 80px;
    border-radius: 20px;
    padding: 10px 0;

    &:hover {
        color: white;
        background-color: lightgray;
        transition: 0.3s;
    }
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

export { HeaderWrap, ContentsWrap, Content, User };
