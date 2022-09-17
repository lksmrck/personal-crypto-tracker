import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
} from "../../constants/actionTypes";
import { StatisticsState } from "../../common/modelTypes";

const DUMMY_HOLDINGS = [
  {
    id: 1,
    name: "bitcoin",
    price: 24000,
    amount: 14,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "cardano",
    price: 1.4,
    amount: 190,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "polkadot",
    price: 15,
    amount: 129,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "ethereum",
    price: 10,
    amount: 14,
    date: "24.1.2021",
  },
];

const initialState: StatisticsState = {
  holdings: DUMMY_HOLDINGS /* [] */,
  TBD: true,
};

export default (initialState: StatisticsState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_HOLDINGS:
      return action.payload;
    case ADD_HOLDING:
      return initialState;
    case UPDATE_HOLDING:
      return initialState;

    default:
      return initialState;
  }
};
