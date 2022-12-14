import { combineReducers } from "redux";

import BlockList from "./BlockList";
import BlockInfo from "./BlockInfo";
import TxInfo from "./TxInfo";
import TxList from "./TxList";
import Mining from "./Mining";

const rootReducer = combineReducers({ BlockList, BlockInfo, TxInfo, TxList, Mining });

export default rootReducer;
