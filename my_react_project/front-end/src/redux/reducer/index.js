import { combineReducers } from "redux";

import login from "./Login";
import reserved from "./Reserved"

const rootReducer = combineReducers({ login, reserved });

export default rootReducer;
