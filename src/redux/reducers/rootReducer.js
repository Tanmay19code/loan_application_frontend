import { combineReducers } from "redux";
import loanReducer from "./loanReducers/loanReducer";

const rootReducer = combineReducers({
  loan: loanReducer,
});

export default rootReducer;
