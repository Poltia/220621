import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";

const useWeb3 = () => {
    // 주소를 담을 상태값
    const [account, setAccount] = useState();
    // web3 객체를 담을 상태값
    const [web3, setWeb3] = useState();

    // 연결된 계정 주소 가져오기 함수
    const getRequestAccount = async () => {
        // 연결된 계정이 없다면 eth_requestAccounts() 실행으로 연결 시도
        const [account] = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return account;
    };

    // 라이프사이클 마운트 처음에 한번만 실행
    useEffect(() => {
        // 즉시실행 화살표 함수
        (async () => {
            // 연결된 주소 가져오고
            const account = await getRequestAccount();
            // web3 객체 만들어주고
            const web3 = new Web3(window.ethereum);
            setAccount(account);
            setWeb3(web3);
        })();
    }, []);

    return [web3, account];
};

export default useWeb3;
