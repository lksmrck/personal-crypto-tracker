import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
} from "../../constants/actionTypes.js";

import * as api from "../../api/index";

export const getHoldings = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchHoldings();

    dispatch({ type: FETCH_ALL_HOLDINGS, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addHolding = (holding: any) => async (dispatch: any) => {
  try {
    const { data } = await api.addHolding(holding);

    dispatch({ type: ADD_HOLDING, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

//rozlišit na BUY a SELL v componentu?
export const updateHolding =
  (id: any, holding: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateHolding(id, holding);

      dispatch({ type: UPDATE_HOLDING, payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };
