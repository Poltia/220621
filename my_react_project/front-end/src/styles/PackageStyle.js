import styled from "styled-components";

const PackageWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;

const Left = styled.div`
    width: 45vw;
    height: 75vh;
`;

const JejuImg = styled.img`
    width: 40vw;
`;

const Right = styled.div`
    position: relative;
    top: 15vh;
    width: 30vw;
    height: 45vh;

    button {
        position: absolute;
        left: 7vw;
        bottom: 0;
    }
`;

const Select = styled.select`
    width: 15vw;
    height: 6vh;
    font-size: 2vw;
`;
const Selected = styled.div`
    position: absolute;
    top: 10vh;
    font-size: 4vw;
`;

export { PackageWrap, Select, JejuImg, Right, Left, Selected };
