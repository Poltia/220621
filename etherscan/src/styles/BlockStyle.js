import styled from "styled-components";

const BlockWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TD = styled.tr`
    color: navy;
`;

const TxBtn = styled.div`
    background-color: antiquewhite;
    border-radius: 2vh;
    width: 50%;
    height: 8vh;
    text-align: center;
    line-height: 8vh;
    font-size: 3vh;
    margin-top: 5vh;
    &:hover {
        cursor: pointer;
        background-color: beige;
        transition: 0.1s;
    }
`;

const Tx = styled.div`
&:hover {
    cursor: pointer;
    color: skyblue;
    transition: 0.1s;
}
`

export { BlockWrap, TD, TxBtn, Tx };
