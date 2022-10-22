import styled from "styled-components";

const PackageWrap = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;

const Left = styled.div`
    width: 40vw;
    height: 75vh;
`;

const JejuImg = styled.img`
    width: 33vw;
`;
const YangImg = styled.img`
    width: 33vw;
`;

const Right = styled.div`
    position: relative;
    top: 15vh;
    width: 30vw;
    height: 50vh;

    button {
        position: absolute;
        left: 7vw;
        bottom: 0;
    }
`;

const ReservNotice = styled.div`
    font-size: 1.5vw;
    button {
        position: relative;
    }
    span {
        background-color: lightgray;
        padding: 0.4vw;
        border-radius: 0.5vw;
    }
    div {
        height: 9vh;
    }
    p {
        font-size: 2vw;
    }
`;

const Select = styled.select`
    width: 15vw;
    height: 6vh;
    font-size: 2vw;
`;
const Selected = styled.div`
    height: 11vh;
    font-size: 2.5vw;
`;

export { PackageWrap, Select, JejuImg, YangImg, Right, Left, Selected, ReservNotice };
