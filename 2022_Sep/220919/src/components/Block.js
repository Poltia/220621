import React from "react";

const Block = (props) => {
  let { data, result, name } = props;
  let temp = "";
  if (name == "user") {
    temp = result;
  } else {
    temp =
      result == "Draw"
        ? "Draw"
        : result == "Win"
        ? "Lose"
        : result == ""
        ? ""
        : "Win";
  }
  return (
    <div className="block">
      {/* 선택한 이미지를 부모컴포넌트에서 props값으로 받아온다. */}
      {/* 리액트에서 제일 많이 쓸 구문. 값이 있으면 그려라 라는 구문 &&
      값이 없으면 오류를 뱉어내기 때문에 */}
      <div className="name">{name}</div>
      <img src={data && data.img} />
      <div className="result">{temp}</div>
    </div>
  );
};

export default Block;
