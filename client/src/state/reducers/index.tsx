import { combineReducers } from "redux";

import statistics from "./statistics";
import transactions from "./transactions";

export const reducers = combineReducers({ transactions, statistics });
