import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { weather, logins } from "./middleware";
import { useEffect, useState } from "react";
/* Get 요청 방식
axios({url: "주소"})

// Post 요청 방식
axios({
  // method 기본이 Get
  method: 'post',
  url: '',
  data: {
    // 넘겨줄 값
  }
})*/
function App() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const getWeather = (name) => {
        dispatch(weather.getWeather(name));
    };

    const weatherData = useSelector((state) => state.weather.weatherData);
    const isLogin = useSelector((state) => state.login.isLogin);
    const userName = useSelector((state) => state.login.id);

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);

    const login = () => {
        dispatch(logins.login(id, password));
    };

    const logout = () => {
        dispatch(logins.logout());
    };

    return (
        <div className="App">
            <label>도시 이름</label>
            <input
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    getWeather(name);
                }}
            >
                날씨 검색
            </button>
            <div>
                지금 {weatherData && weatherData.data?.name} 날씨는 :
                {weatherData && weatherData.data?.weather[0]?.main}
            </div>
            <br />
            <br />
            <label>아이디</label>
            <br />
            <input
                onChange={(e) => {
                    setId(e.target.value);
                }}
            />
            <br />
            <label>비밀번호</label>
            <br />
            <input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <br />
            <button onClick={login}>로그인</button>
            <div>로그인 됨?</div>
            {isLogin ? (
                <div>
                    응 {userName}
                    <button onClick={logout}>로그아웃</button>
                </div>
            ) : (
                <div>아니</div>
            )}
        </div>
    );
}

export default App;
