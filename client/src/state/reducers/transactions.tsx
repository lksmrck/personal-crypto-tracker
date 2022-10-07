import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";
import { TransactionsState } from "../../common/modelTypes";

export default (transactions = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return [...transactions, action.payload];

    default:
      return transactions;
  }
};
