import axios from "axios";

function start() {
    return async (dispatch, getState) => {
        const mining = await axios
            .post("http://localhost:9000", {
                jsonrpc: "2.0",
                id: 1,
                method: "miner_start",
                params: [1],
            })
            .then(() => {
                dispatch({ type: "MINING", payload: true });
            });
    };
}

function stop() {
    return async (dispatch, getState) => {
        const mining = await axios
            .post("http://localhost:9000", {
                jsonrpc: "2.0",
                id: 1,
                method: "miner_stop",
                params: [],
            })
            .then(() => {
                dispatch({ type: "MINING", payload: false });
            });
    };
}

export const MinerAction = { start, stop };

/*

geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
--http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 1234 \
--port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*" \
--ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \ 
--allow-insecure-unlock --unlock "0,1" --password "./node/password.txt" \

*/
