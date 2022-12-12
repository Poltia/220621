import { Route, Routes } from "react-router-dom";
import "./App.css";
import Block from "./pages/Block";
import Main from "./pages/Main";

function App() {
    // const [blockNumbers, setBlockNumbers] = useState();
    // useEffect(() => {
    //     (async () => {
    //         const numbers = await axios({
    //             method: "post",
    //             url: "http://localhost:4000/blocknumbers",
    //         }).then((e) => {
    //             setBlockNumbers(e.data);
    //             console.log(e.data);
    //         });
    //         console.log(numbers);
    //         console.log(numbers.data);
    //         console.log(numbers.data[1].number);
    //     })();
    // }, []);
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/block" element={<Block />} />
            </Routes>
        </>
    );
}

export default App;
