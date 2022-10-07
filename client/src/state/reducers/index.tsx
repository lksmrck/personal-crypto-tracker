import { combineReducers } from "redux";

import statistics from "./statistics";
import transactions from "./transactions";
import auth from "./auth";
import error from "./error";

export const reducers = combineReducers({
  transactions,
  statistics,
  auth,
  error,
});
