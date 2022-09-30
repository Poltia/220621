import "./App.css";
// 라우트 불러오기
import { Routes, Route } from "react-router-dom";
// 페이지js 불러오기
import { Board, Login, Main, Mypage, Signup } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </>
    );
}

export default App;
