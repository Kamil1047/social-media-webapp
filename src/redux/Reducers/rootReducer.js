import { combineReducers } from "redux";
import postsReducer from "./reducer";

const rootReducer = combineReducers({
  data: postsReducer,
});

export default rootReducer;
