import axios from "axios";
/* axios
axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리.
자바스크립트에 fetch가 있지만, 프레임워크에서 ajax를 구현할 때 axios를 쓰는 편이다.
속성은 url이 필수, 나머지는 전달 안해도 상관없다.
옵션 method는 지정 안하면 기본이 Get방식.

설치명령어
npm i axios
*/

function getWeather(name) {
    // action함수는 함수를 반환한다.
    // dispatch, getState 둘다 함수
    return async (dispatch, getState) => {
        const data = await axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=00deeba5bffc01f17685c669f56926e0`,
        });
        //console.log(data);
        //console.log(getState()); // 출력: 비어있는 state 객체
        dispatch({ type: "GET_WEATHER_DATA", payload: data });
        //console.log(getState()); // 출력: weatherData에 data 들어가있음
        // getState()는 store 저장소에 있는 state객체를 반환해준다.
    };
}

export const weather = { getWeather };
