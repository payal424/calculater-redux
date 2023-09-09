import {applyMiddleware, createStore } from "redux";
//import { CreateStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./combinereducer";
const store = createStore(reducers, {}, applyMiddleware(thunk))
export default store