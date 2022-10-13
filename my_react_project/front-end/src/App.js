import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Main, Login, Signup, Mypage, Package, Air, Hotel, Review } from "./pages";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path="/login" element={<Login />} />
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
