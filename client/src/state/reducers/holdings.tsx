import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
  DELETE_HOLDING,
} from "../../constants/actionTypes";
import { HoldingItem } from "../../common/modelTypes";
import { Actions } from "../../common/actionTypes";

export default (holdings = [], action: Actions) => {
  switch (action.type) {
    case FETCH_ALL_HOLDINGS:
      return action.payload;
    case ADD_HOLDING: // přidání holdingu, pokud se daný coin ještě nedrží
      return [...holdings, action.payload];
    case UPDATE_HOLDING:
      return holdings.map((holding: HoldingItem) =>
        holding.name === action.payload.name ? action.payload : holding
      );
    case DELETE_HOLDING:
      holdings = holdings.filter((holding: HoldingItem) => {
        return holding.name !== action.payload.itemName;
      });
      return holdings;

    default:
      return holdings;
  }
};
