import styled from "styled-components";

const ReviewWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 85vh;
    button {
        position: absolute;
        right: 7vw;
        bottom: 0;
    }
`;

const Table = styled.table`
    position: relative;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    max-height: 75vh;
    overflow: scroll;
`;

const Thead = styled.thead`
    tr {
        td {
            font-size: 2vw;
            font-weight: bold;
        }
    }
`;

const HeadTitle = styled.td`
    width: 80%;
`;
const HeadWriter = styled.td`
    text-align: center;
`;

const Tbody = styled.tbody`
    font-size: 1.2vw;
`;

const TD = styled.td`
    &:hover {
        cursor: pointer;
    }
`;
const TD2 = styled.td`
    text-align: center;
`;

export { ReviewWrap, Table, Thead, HeadTitle, HeadWriter, Tbody, TD, TD2 };
