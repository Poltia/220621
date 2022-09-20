import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Body = ({ path, name, item }) => {
  // Link : 리액트에서 <a>같은 역할을 한다.
  // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여준다.
  // 라우터간의 이동을 할 수 있게 도와준다.
  // Link에 필요한 props는 to 어디로
  // to이름의 props에 이동할 경로를 넣어준다.

  // useNavigate : 페이지 이동을 도와준다.
  // 함수 실행 이후 반환받은 객체로 사용을 한다.
  const nav = useNavigate();
  return (
    <div className="body">
      {item && item.id ? <div>{item.id}번 상품</div> : null}
      {item && item.num ? <div>{item.num}개</div> : null}
      {item && item.name ? <div>이름 : {item.name}</div> : null}
      <Link to={path}>{name}로 이동</Link>
      <br />
      <button
        onClick={() => {
          nav(path);
        }}
      >
        {name}로 이동
      </button>
    </div>
  );
};

export default Body;
