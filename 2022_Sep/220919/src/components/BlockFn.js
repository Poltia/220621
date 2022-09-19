import React, { Fragment, useState, useEffect } from "react";

const BlockFn = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  // useEffect()가 생명주기함수를 사용할 수 있게 함수형에서도
  // 리액트에서 지원해주는 유용한 함수(react hook)

  // 빈배열은 componentDidMount라는 것.
  useEffect(() => {
    // 여기에서 데이터를 불러와서 UI에 렌더링 해준다.
    console.log("componentDidMount");
  }, []);

  // componentDidUpdate 만들기
  // num을 주시하고 있다. 주시하는 값이 바뀌면 실행되는 함수
  // 배열안에 추가한 값을 주시하다가 바뀌면 실행된다.
  // useEffect = componentDidMount + componentDidUpdate
  // 그래서 조건으로 처리를 해줘야한다.
  useEffect(() => {
    console.log("num : " + num);
    console.log("num2 : " + num2);
    console.log("componentDidUpdate");
  }, [num, num2]);

  const add = () => {
    setNum(num + 1);
    setNum2(num2 - 1);
    //console.log(num);
  };
  return (
    <>
      <button onClick={add}>add</button>
    </>
  );
};

export default BlockFn;
