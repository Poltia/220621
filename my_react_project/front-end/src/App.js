import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components";
import {
    Main,
    Login,
    Signup,
    Mypage,
    JejuPackage,
    YangPackage,
    Air,
    Hotel,
    Review,
    Write,
    Post,
    Inquire,
} from "./pages";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/middleware/loginAction";

function App() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const id = sessionStorage.getItem("userID");
    sessionStorage.setItem("URL", "http://localhost");

    // 쿠키
    const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

    // 로그인 체크 //
    useEffect(() => {
        dispatch(loginAction.loginCheck(cookies, nav, id));
    }, [cookies, id, nav, dispatch]);

    return (
        <>
            <Header removeCookie={removeCookie} />
            <Routes>
                <Route index element={<Main />} />
                <Route
                    path="/login"
                    element={<Login setCookie={setCookie} />}
                    removeCookie={removeCookie}
                />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/jejupackage" element={<JejuPackage />} />
                <Route path="/yangpackage" element={<YangPackage />} />
                <Route path="/air" element={<Air />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/review" element={<Review />} />
                <Route path="/write" element={<Write />} />
                <Route path="/post" element={<Post />} />
                <Route path="/inquire" element={<Inquire />} />
            </Routes>
        </>
    );
}

export default App;
