import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components";
import { Main, Login, Signup, Mypage, Package, Air, Hotel, Review } from "./pages";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";

function App() {
    const nav = useNavigate();

    // 쿠키
    const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
    // 쿠키 확인하기 ㄱ
    useEffect(() => {
        console.log(cookies);
    }, [cookies]);

    // access 에 access token 할당
    const access = sessionStorage.getItem("accessToken");
    // refresh 에 refresh token 할당
    const refresh = cookies.refreshToken;

    // 토큰 확인 요청 함수
    function tokenCheck() {
        return async () => {
            const token = await axios({
                method: "post",
                url: "http://localhost:8000/tokencheck",
                data: { access, refresh },
            });
            console.log(token.data);
            if (token.data.relogin === true) {
                alert("로그인 후 이용해 주세요");
                nav("/login");
            } else if (token.data.relogin === false && token.data.session !== undefined) {
                sessionStorage.removeItem("accessToken");
                sessionStorage.setItem("accessToken", token.data.session.access_token);
            } else alert("에러니까 코드 다시짜렴... 훗");
        };
    }
    // 토큰 확인하기 실행
    tokenCheck();

    return (
        <>
            <Header removeCookie={removeCookie} />
            {/* <button onClick={tokenCheck()}>토큰확인</button> */}
            <Routes>
                <Route index element={<Main />} />
                <Route
                    path="/login"
                    element={<Login setCookie={setCookie} />}
                    removeCookie={removeCookie}
                />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/package" element={<Package />} />
                <Route path="/air" element={<Air />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/review" element={<Review />} />
            </Routes>
        </>
    );
}

export default App;
