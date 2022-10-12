import styled from "styled-components";

const SignupWrap = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    label {
        font-size: 30px;
        margin: 10px 0;
    }
    input {
        width: 350px;
        height: 45px;
        font-size: 20px;
        margin-bottom: 20px;
    }
    button {
        position: absolute;
        right: 0;
        &:hover {
            cursor: pointer;
            color: white;
            background-color: gray;
            transition: 0.3s;
        }
    }
`;

export { SignupWrap };
