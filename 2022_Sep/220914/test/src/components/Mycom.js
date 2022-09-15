import React from 'react'

// 이렇게 컴포넌트로 작업을 하면 좋은 점은.
// 일반 태그처럼 우리가 원하는 내용을 태그화해서 사용할 수 있기 때문에
// 코드의 재활용성이 용이해진다. 유지보수가 편하다.

// 리액트의 데이터 구조는 단방향. 위에서 아래로 데이터를 전달해줄 수 있다.
// 여기서 받은 num 매개변수의 명칭은 props.
// 부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달해줄 수 있다.
// 단방향으로, 부모가 자식에게만 데이터를 전달할 수 있고, 자식은 불가능하다.

// 중괄호 써주는 이유는 자바스크립트 구문을 사용하겠다는 뜻.
// 태그에 class를 추가할 때, className 리액트 어트리뷰트로 추가해야한다.
const Mycom = (num) => {
    const {name, age, cName} = num;
    console.log(num.name, num.age, num.cName);
  return (
    <div className={cName + " com"}>
        <br/>
        내이름은 {name}<br/>
        {age}이지!!<br/>
        <br/>
    </div>
  )
}

// default >> 하나만 내보낼때
export default Mycom