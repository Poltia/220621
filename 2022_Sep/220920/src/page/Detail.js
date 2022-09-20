import React, { useState } from "react";
import { Header } from "../components";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 파라미터 값을 가져오기 위한 방법
// 리액트 훅 함수를 사용해서 작업을 할 수 있다.
// useParams() 사용
// url에 경로에 있는 파라미터들을 객체의 형태로 불러올 수 있다.
// useParams()를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색 쿼리문 가져오기
// 검색하려면 input 입력이 있어야한다.
// 입력했을때 값을 저장하기위해서 useState 사용
// input.value를 useState값에 넣어놨다.
// 입력한 값을 언제든 사용할 수 있다.
// 검색 쿼리문을 만들어보자.
// useSearchParams()를 실행해서 반환받은 객체를 사용
// useSearchParams()가 경로에서 뽑아주는 영역은
// ?뒤에 키값을 기준으로
// ?q=1  이런 형태는 q라는 키값이 객체형태로 나온다 {q:1}
// useSearchParams() 실행 후 반환된 객체 사용

// 현재 경로를 가져와서 사용하기
// useLocation() 실행 후 반환된 객체 사용
const Detail = () => {
  const [search, setSearch] = useState("");
  const params = useParams();
  const location = useLocation();
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  const keyInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Header title="item_page" />
      <div>{search}</div>
      <div>이거검색함? -- {query.get("q")}</div>
      <input onChange={keyInput} />
      <Link to={location.pathname + "?q=" + search}>검색</Link>
    </div>
  );
};

export default Detail;
