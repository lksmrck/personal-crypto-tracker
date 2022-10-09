import { combineReducers } from "redux";

import statistics from "./statistics";
import transactions from "./transactions";
import auth from "./auth";
import errorAndLoading from "./errorAndLoading";

export const reducers = combineReducers({
  transactions,
  statistics,
  auth,
  errorAndLoading,
});
