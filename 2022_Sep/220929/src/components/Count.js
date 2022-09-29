import React from "react";
import { useDispatch } from "react-redux";

const Count = ({ count, setCount }) => {
    // useDispatch()를 사용
    const dispatch = useDispatch();
    // 반환된 dispatch를 사용해서 action을 던질 수 있다.
    /* dispatch 함수를 사용하는데 매개변수로 객체를 전달해준다.
    객체의 규칙은 {type, patload}
    type: 동작시킬 행동의 이름
    payload: 선택사항, 데이터 전달이 필요하면 사용 */

    const Add = () => {
        dispatch({ type: "ADD" });
        setCount(count + 1);
    };
    const Remove = () => {
        dispatch({ type: "REMOVE" });
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={Add}>+</button>
            <button onClick={Remove}>-</button>
        </div>
    );
};

export default Count;
