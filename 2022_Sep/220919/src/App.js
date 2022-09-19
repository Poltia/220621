import { useState } from "react";
import "./App.css";
import { rock, scissors, paper, srp } from "./imgs";
import Block from "./components/Block";

function App() {
  /* 필요한거.
  일단 간단한 가위바위보를 만들자
  플레이어 영역 하나, 컴퓨터 영역 하나
  플레이어가 가위나 바위나 보를 선택해서 버튼을 누르면
  플레이어가 선택한 이미지가 플레이어 영역에 보이고
  컴퓨터는 랜덤한 값을 이용해서 가위바위보 이미지가 보이게 만들고
  결과를 win lose 표시하기.
  */

  //플레이어 컴퓨터 영역(컴포넌트로 정리)

  // 이 객체는 선택할 데이터를 객체로 정리 해준것
  const select = {
    scissors: {
      name: "가위",
      img: scissors,
    },
    rock: {
      name: "바위",
      img: rock,
    },
    paper: {
      name: "보",
      img: paper,
    },
    default: {
      name: "default",
      img: srp,
    },
  };

  // 유저가 선택한 값을 담아놓고 주시해야한다.
  // 선택하면 데이터가 바뀌어서 다시 그려줘야 하기 때문에. (이미지가 변해야함)
  // 유저의 선택 값을 담을 useState()
  const [userSelect, setUserSelect] = useState(select["default"]); // key값을 전달하기 위해 문자열로 해서 전달

  // 컴퓨터의 선택 값을 담을 useState()
  const [comSelect, setComSelect] = useState(select["default"]);

  // 승패 결과를 담아줄 useState()
  const [result, setResult] = useState("");

  // 컴퓨터는 버튼이 없으므로, 유저가 선택하면 랜덤으로 값이 전달되어야하는데
  // Math.random()를 이용해서 랜덤값을 받아오고,
  // 받아온 값으로 위에 만든 객체에서 값을 가져와야하는데
  // 객체에서 키값만 뽑아서 배열로 만들자!
  // let arr = Object.keys(select) 함수로 반환해주면
  // arr 변수안에 키값만 뽑아서 배열로 받아준다.

  function userClick(temp) {
    setUserSelect(select[temp]);

    //Object.keys()를 사용해서 객체의 키값만 뽑아서 배열을 반환 받아서 arr변수에 바인딩.
    let arr = Object.keys(select);
    // 랜덤한 숫자 3개(0, 1, 2)
    let comRandom = Math.floor(Math.random() * 3);
    // arr[comRandom] >> 랜덤한 키값이 뽑힌다.
    // select 객체의 값을 불러오는 방법은
    // 1. select. 으로 가져온다.
    // 2. select['문자열'] 으로 가져온다.
    // 두가지 방법이 있는데, 우리가 선택한건 2번.
    setComSelect(select[arr[comRandom]]);

    //결과를 가지고 승패를 보여준다.
    let player = select[temp];
    let computer = select[arr[comRandom]];
    /* 조건
    1. 유저와 컴퓨터가 같으면 무승부
    2. 유저가 가위 일때 컴퓨터가 보 win, 주먹 lose
    3. 유저가 보 일때 컴퓨터가 주먹 win, 가위 lose
    4. 유저가 주먹 일때 컴퓨터가 가위 win, 보 lose */
    if (player.name == computer.name) {
      setResult("Draw");
    } else if (player.name == "가위") {
      let temp = computer.name == "보" ? "Win" : "Lose";
      setResult(temp);
    } else if (player.name == "바위") {
      let temp = computer.name == "가위" ? "Win" : "Lose";
      setResult(temp);
    } else if (player.name == "보") {
      let temp = computer.name == "바위" ? "Win" : "Lose";
      setResult(temp);
    }
  }
  /*
  1. 우리가 만들어 놓은 객체의 값이 필요하기 때문에 userClick()를 만들었고
  그 값을 저장해주는 userSelect변수를 useState()를 통해서 만들어줬고
  2. 버튼을 클릭했을때 그 함수가 실행되고 state값이 변하기 때문에 다시 리렌더링한다.
  부모가 리렌더링 되었으므로 자식 컴포넌트도 리렌더링 된다.
  
  Block에 우리는 userClick을 실행하고 setUserSelect()로 변경한
  userSelect 값을 props로 넘겨줬다.
  
  Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를 보여줬다.
  ㄴ how? 부모가 리렌더링 됐기때문에 자식도 변한 값이 리렌더링 된것이다.*/
  return (
    <div className="App">
      <div className="com">
        <Block data={comSelect} name="com" result={result} />
      </div>
      <div className="player">
        <Block data={userSelect} name="user" result={result} />

        <button
          onClick={() => {
            userClick("scissors");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            userClick("rock");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            userClick("paper");
          }}
        >
          보
        </button>
      </div>
    </div>
  );
}

export default App;
