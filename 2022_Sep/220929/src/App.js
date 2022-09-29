import "./App.css";
import { Count, CountView } from "./components";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <CountView count={count} />
            <Count count={count} setCount={setCount} />
        </div>
    );
}

export default App;
