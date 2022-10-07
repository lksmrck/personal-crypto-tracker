import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
} from "../../constants/actionTypes";
import { StatisticsState, HoldingItem } from "../../common/modelTypes";
import { Action } from "@reduxjs/toolkit";

export default (holdings = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL_HOLDINGS: // bude useEffect v APP komponentu. Na začátku se načte do state holdings z mongodb
      return action.payload;
    case ADD_HOLDING: // přidání holdingu, pokud se daný coin ještě nedrží
      return [...holdings, action.payload];
    case UPDATE_HOLDING:
      return holdings.map((holding: HoldingItem) =>
        holding.name === action.payload.name ? action.payload : holding
      );

    default:
      return holdings;
  }
};
