import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";
import { HoldingsTransactionsActions } from "../../common/actionTypes";

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
