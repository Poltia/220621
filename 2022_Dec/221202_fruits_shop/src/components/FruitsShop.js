import React, { useEffect, useState } from "react";
import FruitsShopContract from "../contracts/FruitsShop.json";
import FruitsTokenContract from "../contracts/FruitsToken.json";

const FruitsShop = ({ web3, account }) => {
    const [myBanana, setMyBanana] = useState();
    const [myMango, setMyMango] = useState();
    const [myBananaTK, setMyBananaTK] = useState();
    const [myMangoTK, setMyMangoTK] = useState();

    const [deployed, setDeployed] = useState();
    const [CA, setCA] = useState();
    const [TKDeployed, setTKDeployed] = useState();

    // 사고 파는 과일 갯수 변수
    const [buyBanana, setBuyBanana] = useState();
    const banana_buy = (e) => {
        setBuyBanana(e.target.value);
    };
    const [buyMango, setBuyMango] = useState();
    const mango_buy = (e) => {
        setBuyMango(e.target.value);
    };
    const [sellBanana, setSellBanana] = useState();
    const banana_sell = (e) => {
        setSellBanana(e.target.value);
    };
    const [sellMango, setSellMango] = useState();
    const mango_sell = (e) => {
        setSellMango(e.target.value);
    };

    // 바나나 구매하기 버튼 함수 ETH
    const buy_banana = async () => {
        await deployed.methods.buyBanana(buyBanana).send({
            from: account,
            to: CA,
            value: web3.utils.toWei((buyBanana * 2).toString(), "ether"),
        });
        const currentBanana = await deployed.methods.getBanana().call();
        setMyBanana(currentBanana);
    };
    // 바나나 구매하기 버튼 함수 FTK
    const buy_banana_FTK = async () => {
        await TKDeployed.methods.buyBanana_costToken(buyBanana).send({
            from: account,
            to: CA,
            // value: web3.utils.toWei((buyBanana * 200).toString(), "ether"),
        });
        const currentBananaTK = await TKDeployed.methods.getBanana().call();
        setMyBananaTK(currentBananaTK);
    };
    
    // 망고 구매하기 버튼 함수 ETH
    const buy_mango = async () => {
        await deployed.methods.buyMango(buyMango).send({
            from: account,
            to: CA,
            value: web3.utils.toWei((buyMango * 1).toString(), "ether"),
        });
        const currentMango = await deployed.methods.getMango().call();
        setMyMango(currentMango);
    };
    // 망고 구매하기 버튼 함수 FTK
    const buy_mango_FTK = async () => {
        await TKDeployed.methods.buyMango_costToken(buyMango).send({
            from: account,
            to: CA,
            // value: web3.utils.toWei((buyMango * 200).toString(), "ether"),
        });
        const currentMangoTK = await TKDeployed.methods.getMango().call();
        setMyMangoTK(currentMangoTK);
    };

    // 바나나 판매하기 버튼 함수 ETH
    const sell_banana = async () => {
        const eth = web3.utils.toWei("2", "ether");
        await deployed.methods.sellBanana(eth, sellBanana).send({
            from: account,
            to: CA,
        });
        const currentBanana = await deployed.methods.getBanana().call();
        setMyBanana(currentBanana);
    };
    // 바나나 판매하기 버튼 함수 FTK
    const sell_banana_FTK = async () => {
        const eth = web3.utils.toWei("200", "ether");
        await TKDeployed.methods.sellBanana_costToken(eth, sellBanana).send({
            from: account,
            to: CA,
        });
        const currentBananaTK = await TKDeployed.methods.getBanana().call();
        setMyBananaTK(currentBananaTK);
    };
    
    // 망고 판매하기 버튼 함수 ETH
    const sell_mango = async () => {
        const eth = web3.utils.toWei("1", "ether");
        await deployed.methods.sellMango(eth, sellMango).send({
            from: account,
            to: CA,
        });
        const currentMango = await deployed.methods.getMango().call();
        setMyMango(currentMango);
    };
    // 망고 판매하기 버튼 함수 FTK
    const sell_mango_FTK = async () => {
        const eth = web3.utils.toWei("100", "ether");
        await TKDeployed.methods.sellMango_costToken(eth, sellMango).send({
            from: account,
            to: CA,
        });
        const currentMangoTK = await TKDeployed.methods.getMango().call();
        setMyMangoTK(currentMangoTK);
    };
    
    useEffect(() => {
        (async () => {
            if (!web3) return;

            const networkId = await web3.eth.net.getId();
            const instance = await new web3.eth.Contract(
                FruitsShopContract.abi, // abi
                FruitsShopContract.networks[networkId].address // CA
            );
            const TKInstance = await new web3.eth.Contract(
                FruitsTokenContract.abi,
                FruitsTokenContract.networks[networkId].address
            );

            // 인스턴스 객체에서 과일 갯수 가져오는 함수 호출
            const currentBanana = await instance.methods.getBanana().call();
            const currentMango = await instance.methods.getMango().call();
            const currentBananaTK = await TKInstance.methods.getBanana().call();
            const currentMangoTK = await TKInstance.methods.getMango().call();

            setMyBanana(currentBanana);
            setMyMango(currentMango);
            setMyBananaTK(currentBananaTK);
            setMyMangoTK(currentMangoTK);

            setDeployed(instance);
            setTKDeployed(TKInstance);
            setCA(FruitsShopContract.networks[networkId].address);
        })();
    }, []);

    return (
        <>
            <h3>바나나!</h3>
            <div>
                <b>바나나</b> 개당 <b>2</b> ETH, <b>200</b> FTK
            </div>
            <div>
                현재 소지중인 바나나 : 총 {Number(myBanana) + Number(myBananaTK)} 개{" "}
            </div>
            <div>
                ETH로 구매 : {myBanana}, FTK로 구매 : {myBananaTK}
            </div>
            <input type="number" onChange={banana_buy} />
            <button onClick={buy_banana}>구매하기</button>
            <button onClick={buy_banana_FTK}>FTK로 구매하기</button>
            <div></div>
            <input type="number" onChange={banana_sell} />
            <button onClick={sell_banana}>판매하기</button>
            <button onClick={sell_banana_FTK}>FTK로 판매하기</button>

            <h3>망고!</h3>
            <div>
                <b>망고</b> 개당 <b>1</b> ETH, <b>100</b> FTK
            </div>
            <div>현재 소지중인 망고 : 총 {Number(myMango)+Number(myMangoTK)} 개 </div>
            <div>ETH로 구매 : {myMango}, FTK로 구매 : {myMangoTK}</div>
            <input type="number" onChange={mango_buy} />
            <button onClick={buy_mango}>구매하기</button>
            <button onClick={buy_mango_FTK}>FTK로 구매하기</button>
            <div></div>
            <input type="number" onChange={mango_sell} />
            <button onClick={sell_mango}>판매하기</button>
            <button onClick={sell_mango_FTK}>FTK로 판매하기</button>
        </>
    );
};

export default FruitsShop;
