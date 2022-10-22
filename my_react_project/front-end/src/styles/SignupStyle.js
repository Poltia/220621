import styled from "styled-components";

const SignupWrap = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    label {
        font-size: 2vw;
        margin: 0.5vw 0;
    }
    input {
        width: 24.5vw;
        height: 5vh;
        font-size: 1.6vw;
        margin-bottom: 2.4vh;
    }
    select {
        width: 10vw;
        height: 6vh;
        font-size: 1.6vw;
    }
    button {
        position: absolute;
        right: 0;
        height: 6vh;
    }
`;

export { SignupWrap };
