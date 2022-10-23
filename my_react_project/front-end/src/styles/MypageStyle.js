import styled from "styled-components";

const MyWrap = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    border: 1px solid black; // 테두리
`;
const Left = styled.div`
    width: 40vw;
    height: 75vh;
`;
const Right = styled.div`
    width: 40vw;
    height: 75vh;
`;
const Title = styled.h1`
    text-align: center;
`;
const Label = styled.label``;
const Input = styled.input``;
const Select = styled.select``;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const Reserved = styled.div``;
export { MyWrap, Left, Right, Title, Label, Input, Wrap, Select, Reserved };
