import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Block from "./pages/Block";
import TxInfo from "./pages/TxInfo";

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

    sessionStorage.setItem("URL", "http://192.168.0.243");
    /*
geth --datadir node --http --http.addr "192.168.0.243" --http.port 9000 --http.corsdomain "*" \
--http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 1234 \
--port 30300 --ws --ws.addr "192.168.0.243" --ws.port 9005 --ws.origins "*" \
--ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \
--allow-insecure-unlock --unlock "0,1" --password "./node/password.txt" \

geth --goerli --http --http.addr "192.168.0.243" --http.port 9000 --http.corsdomain "*" \
--http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 1234 \
--port 30300 --ws --ws.addr "192.168.0.243" --ws.port 9005 --ws.origins "*" \
--ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \
--allow-insecure-unlock --unlock "0,1" --password "./node/password.txt" \
*/
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/block" element={<Block />} />
                <Route path="/txinfo" element={<TxInfo />} />
            </Routes>
        </>
    );
}

export default App;
