import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";
import { Actions } from "../../common/modelTypes";

export default (transactions = [], action: Actions) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};
