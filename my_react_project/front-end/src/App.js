import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Main, Login, Signup, Mypage, Package, Air, Hotel, Review } from "./pages";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import checkToken from "./redux/middleware/checkToken";

function App() {
    const dispatch = useDispatch();
    // 쿠키
    const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
    // 쿠키 확인하기 ㄱ
    useEffect(() => {
        console.log(cookies);
    }, [cookies]);

    return (
        <>
            <Header />
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
