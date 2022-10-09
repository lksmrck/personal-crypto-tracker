import { combineReducers } from "redux";

import holdings from "./holdings";
import transactions from "./transactions";
import auth from "./auth";
import errorAndLoading from "./errorAndLoading";

export const reducers = combineReducers({
  transactions,
  holdings,
  auth,
  errorAndLoading,
});
