import { combineReducers } from "redux";

import login from "./Login";
import reserved from "./Reserved";
import list from "./List";
import userInfo from "./UserInfo";
import infoChange from "./InfoChange";

const rootReducer = combineReducers({ login, reserved, list, userInfo, infoChange });

export default rootReducer;
