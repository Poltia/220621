import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Shop } from "./page";
import { Header } from "./components";
import { useSelector } from "react-redux";

function App() {
    const isLogin = useSelector((state) => state.loginReducer.isLogin);

    const LoginRedirect = () => {
        return isLogin === true ? <Shop /> : loginMessage();
    };

    function loginMessage() {
        alert("로그인 후 이용바랍니다.");
        return <Navigate to="/" />;
    }

    return (
        <div className="App">
            <Header isLogin={isLogin} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shop" element={<LoginRedirect />} />
            </Routes>
        </div>
    );
}

export default App;
