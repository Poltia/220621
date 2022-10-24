import styled from "styled-components";

const AirWrap = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80vw;
    border: 1px solid black;
`;

const Left = styled.div`
    width: 40vw;
    height: 75vh;
`;

const Select = styled.select``;

const Right = styled.div``;

export { AirWrap, Left, Right, Select };
