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
    const { data } = await api.addHolding(holding); // data se hned destructuruje response, která má v sobě vždycky data object.

    dispatch({ type: ADD_HOLDING, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateHolding =
  (name: string, holding: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateHolding(name, holding);

      dispatch({ type: UPDATE_HOLDING, payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };
