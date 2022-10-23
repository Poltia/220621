import { combineReducers } from "redux";

import login from "./Login";
import reserved from "./Reserved";
import list from "./List";

const rootReducer = combineReducers({ login, reserved, list });

export default rootReducer;
