// redux에서 지원해주는 함수
// reducer 함수를 하나로 합쳐준다.
// combineReducers()에 객체로 전달하면 알아서 합쳐준다.
import { combineReducers } from "redux";
import login from "./login";
import weather from "./weather";

// 저장소에 합쳐진 리듀서 함수가 반영된다.
const rootReducer = combineReducers({ login, weather });

export default rootReducer;
