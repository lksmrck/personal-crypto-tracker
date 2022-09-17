import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";
import { TransactionsState } from "../../common/modelTypes";

const DUMMY_TRANSACTIONS = [
  {
    transactionType: "buy",
    id: 1,
    name: "Bitcon",
    price: 20,
    amount: 10,
    date: "31.1.2021",
  },
  {
    transactionType: "sell",
    id: 2,
    name: "Ethereum",
    price: 5,
    amount: 400,
    date: "3.12.2021",
  },
  {
    transactionType: "sell",
    id: 3,
    name: "Bitcon",
    price: 3,
    amount: 1,
    date: "2.3.2022",
  },
  {
    transactionType: "buy",
    id: 4,
    name: "Polkadot",
    price: 30,
    amount: 80,
    date: "4.5.2022",
  },
];

const initialState: TransactionsState = {
  transactions: /* [] */ DUMMY_TRANSACTIONS,
  TBD1: true,
};

export default (initialState: TransactionsState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTIONS:
      return action.payload;
    case ADD_TRANSACTION:
      return initialState;

    default:
      return initialState;
  }
};
