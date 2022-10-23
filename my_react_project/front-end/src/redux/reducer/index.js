import { combineReducers } from "redux";

import login from "./Login";
import reserved from "./Reserved";
import list from "./List";
import userInfo from "./UserInfo";

const rootReducer = combineReducers({ login, reserved, list, userInfo });

export default rootReducer;
