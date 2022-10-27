import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";
import { HoldingsTransactionsActions } from "../../common/actionTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../common/modelTypes";

export default (transactions = [], action: HoldingsTransactionsActions) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};
