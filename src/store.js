import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./redux/reducer";

const rootReducer = combineReducers({
  userData: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
