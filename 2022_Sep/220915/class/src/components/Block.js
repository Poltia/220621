import {React, useState} from 'react'

/* 리액트가 왜 react인가!?
자기가 값이 변하면 반응해서 알려주고
리액트는 반응한 것을 그려줌. 리랜더링*/
const Block = ({num}) => {
    let count = 0;
    // useState()를 사용해서 받는값은
    // 배열의 첫번째는 실사용 값. 우리가 사용할 값이고 주시하는 값
    // 배열의 두번째는 이 값을 수정할 수 있는 함수.
    // ㄴ 값을 바꾸려면 이 함수를 사용해서만 state값을 바꿀 수 있다.
    // useState()의 매개변수가 초기 세팅값
    // setnum()를 사용해서 값을 수정할땐 setnum()의 매개변수로 전달
    // 일반변수는 다시 그려주면 리랜더링하기 때문에 초기값으로 변한다.
    // 하지만 useState값은 리액트가 관리하고 있기 때문에 그려주기 전의 값을 보관하기 때문에 값이 남아있다.
    // react에서 제공해주는 useState()같은 유용한 함수들이 많은데,
    // 이런것들을 리액트 훅(react hook) 이라고 부른다.
    const [num1, setnum] = useState(count);
    function add(){
        console.log("클릭")
        count++
        setnum(num1 + 1);
        //비동기적으로 돌아가기 때문에 콘솔이 값이 변하기전에 동작해서 바뀌기 전 값이 출력된다.
        console.log(num1);
    }
  return (
    // 변수를 바꾼다고 태그에 변수값 넣은게 바뀌지 않았다.
    // document.queyselector('태그명').innerHTML = '값'
    // useState >> 리액트에게 값을 주시하게 만들고 변하려면
    // 내가 변했으니까 반응하고 다시 랜더링하게함
    // 변수를 전부 보고 다 그린다면 dom을 그리는 비용이 많이드는데,
    // 그 비용을 절약하게 하기 위해 사용한다.
    <div>
        <div className='block'>{num1}</div>
        <button onClick={add}>더하기</button>
    </div>
  )
}

export default Block;


/* 지뢰찾기 만들기~
5 * 5 판을 만들고
폭탄을 5개정도 랜덤위치에 만들고
처음에 안보이다가 블럭 누르면 안에 내용 보이게
폭탄이 들어있으면 게임오버
*/
