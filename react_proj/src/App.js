import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Signup, Mypage, Board, Login, Write, Post } from "./pages";
import { useEffect, useState } from "react";
import { default_img } from "./imgs";

function App() {
    // signup에서 받은걸 users라는 배열에 담는다
    const [users, setUser] = useState([]);
    // users주시하는 코드, 변화가생기면 알려줌 (componentDidUpdate)
    useEffect(() => {
        console.table(users);
    }, [users]);

    // login 되어있는지 확인
    const [login, setLogin] = useState(false);
    useEffect(() => {
        console.log("로그인 여부 : " + login);
    }, [login]);

    // login한 user id받기
    const [login_user, setLogin_user] = useState([]);
    useEffect(() => {
        console.log("로그인함 : " + login_user.id);
    }, [login_user]);

    // 프로필 사진 변경하기
    const [profile, setProfile] = useState(default_img);
    useEffect(() => {
        console.log("사진변경", profile);
    }, [profile]);

    // 게시글 받기
    const [title, setTitle] = useState([]); // 제목
    useEffect(() => {
        console.log("게시글제목 : " + title);
    }, [title]);
    const [write, setWrite] = useState([]); // 글내용
    useEffect(() => {
        console.log("게시글내용 : " + write);
    }, [write]);
    const [writer, setWriter] = useState([]); // 작성자
    useEffect(() => {
        console.log("작성자 :", writer.id);
    }, [writer]);

    // 제목, 글내용, 작성자 합친 거
    const [list, setList] = useState([]);
    useEffect(() => {
        console.table(list);
    }, [list]);

    // 글 보기 위한 index값 설정해주는거
    const [indexNum, setIndexNum] = useState();
    useEffect(() => {
        console.log("index number : " + indexNum);
    }, [indexNum]);

    // 리다이렉트 컴포넌트 ㄱ
    const Redirect = ({ login_user, setUser, users, profile, setProfile }) => {
        return login == true ? (
            <Mypage
                user={login_user}
                setUser={setUser}
                users={users}
                profile={profile}
                setProfile={setProfile}
            />
        ) : (
            <Navigate to="/" />
        );
    };
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/signup"
                    element={<Signup user={users} setUser={setUser} />}
                />
                <Route
                    path="/mypage"
                    element={
                        <Redirect
                            login_user={login_user}
                            setUser={setUser}
                            users={users}
                            profile={profile}
                            setProfile={setProfile}
                        />
                    }
                />
                <Route
                    path="/board"
                    element={
                        <Board
                            login={login}
                            list={list}
                            setIndexNum={setIndexNum}
                        />
                    }
                />
                <Route
                    path="/write"
                    element={
                        <Write
                            login_user={login_user}
                            setLogin_user={setLogin_user}
                            setWrite={setWrite}
                            setTitle={setTitle}
                            setWriter={setWriter}
                            setList={setList}
                            list={list}
                            title={title}
                            write={write}
                        />
                    }
                />
                <Route
                    path="/post"
                    element={
                        <Post list={list} indexNum={indexNum} writer={writer} />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            user={users}
                            setLogin={setLogin}
                            setLogin_user={setLogin_user}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
