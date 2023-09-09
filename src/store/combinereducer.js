import { combineReducers } from "redux";
import adding from "./reducer";
import multiple from "./reducer1";
const reducers = combineReducers({amt : adding , mult : multiple})
export default reducers