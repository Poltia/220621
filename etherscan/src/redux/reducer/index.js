import { combineReducers } from "redux";

import BlockList from "./BlockList";
import BlockInfo from "./BlockInfo";

const rootReducer = combineReducers({ BlockList, BlockInfo });

export default rootReducer;
