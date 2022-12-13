import { combineReducers } from "redux";

import BlockList from "./BlockList";
import BlockInfo from "./BlockInfo";
import TxInfo from "./TxInfo";
import TxList from "./TxList";

const rootReducer = combineReducers({ BlockList, BlockInfo, TxInfo, TxList });

export default rootReducer;
