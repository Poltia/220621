import { createStore, applyMiddleware } from "redux"; //
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// thunk가 하는 일이 Action Createors라는 함수를 만들어 준다.
// Action Createors 함수는 함수를 반환한다.
// thunk는 dispatch를 딜레이 시켜주는 역할

// applyMiddleware 미들웨어를 적용 시켜주는 함수
// applyMiddleware() 매개변수로 적용시킬 미들웨어 매개변수로 전달

// createStore 함수의 두번째 매개변수로 applyMiddleware 함수를 전달하고
// applyMiddleware 함수의 매개변수로 사용할 미들웨어 전달. (지금은 thunk)
let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //
// composeWithDevTools로 미들웨어를 매개변수로 전달해주면
// 개발자 툴로 action이 일어났을때 변화한 state를 바로바로 확인할 수 있다.

export default store;

// https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=00deeba5bffc01f17685c669f56926e0
