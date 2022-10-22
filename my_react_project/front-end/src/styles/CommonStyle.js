import styled from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 0.7vw;
    background: lightgray;
    padding: 0.7vw;
    font-size: 1.6vw;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: gray;
        transition: 0.3s;
    }
`;

const Title = styled.h1`
    font-size: 3.2vw;
`;

export { Button, Title };
