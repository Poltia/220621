import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Main, Login, Signup } from "./pages";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
