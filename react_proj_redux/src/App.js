import "./App.css";
// 라우트 불러오기
import { Routes, Route } from "react-router-dom";
// 페이지js 불러오기
import { Board, Login, Main, Mypage, Post, Signup, Write } from "./pages";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
    const users = useSelector((state) => state.users);
    useEffect(() => {
        console.log("users :");
        console.table(users);
    }, [users]);
    const list = useSelector((state) => state.post_list);
    useEffect(() => {
        console.log("list :");
        console.log(list);
    }, [list]);
    const login_user = useSelector((state) => state.login_user);
    useEffect(() => {
        console.log("login user :");
        console.log(login_user);
    }, [login_user]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/board" element={<Board />} />
                <Route path="/write" element={<Write />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </>
    );
}

export default App;
