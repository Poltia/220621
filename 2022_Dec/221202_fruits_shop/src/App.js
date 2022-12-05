import "./App.css";
import FruitsShop from "./components/FruitsShop";
import useWeb3 from "./hooks/useWeb3";

function App() {
    const [web3, account] = useWeb3();

    if (!account) return <h1>메타마스크를 연결해주세요</h1>;

    return (
        <>
            <h1>망고바나나 바나나망고 가게</h1>
            <FruitsShop web3={web3} account={account} />
        </>
    );
}

export default App;
