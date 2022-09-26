import { React } from "react";
import { Header } from "../components";
import { chan1, chan2, chan3 } from "../imgs";

const Main = () => {
    return (
        <>
            <Header />
            <div className="body">
                <div className="box1">
                    <img src={chan1} alt="사진1" />
                    <div>이렇게 귀여운 우리애기</div>
                </div>
                <div className="box2">
                    <div>나만 볼꺼야?</div>
                    <img src={chan2} alt="사진2" />
                </div>
                <div className="box3">
                    <img src={chan3} alt="사진3" />
                    <div>자랑해야지!!</div>
                </div>
            </div>
        </>
    );
};

export default Main;
