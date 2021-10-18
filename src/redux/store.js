import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/rootReducer";

const middlewares = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
