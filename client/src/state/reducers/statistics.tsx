import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
} from "../../constants/actionTypes";
import { StatisticsState } from "../../common/modelTypes";

const DUMMY_HOLDINGS = [
  {
    id: 1,
    name: "Bitcoin",
    price: 24000,
    amount: 14,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "Cardano",
    price: 1.4,
    amount: 190,
    date: "24.1.2021",
  },
  {
    id: 1,
    name: "Polkadot",
    price: 15,
    amount: 129,
    date: "24.1.2021",
  },
  /* {
    id: 1,
    name: "ethereum",
    price: 10,
    amount: 14,
    date: "24.1.2021",
  }, */
];

const initialState: StatisticsState = {
  holdings: DUMMY_HOLDINGS /* [] */,
  TBD: true,
};

export default (holdings = DUMMY_HOLDINGS, action: any) => {
  switch (action.type) {
    case FETCH_ALL_HOLDINGS:
      return action.payload;
    case ADD_HOLDING:
      return [...holdings, action.payload];
    case UPDATE_HOLDING:
      return holdings;

    default:
      return holdings;
  }
};
