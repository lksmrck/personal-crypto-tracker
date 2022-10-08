import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
  SET_ERROR,
  DELETE_HOLDING,
} from "../../constants/actionTypes";
import { HoldingItem } from "../../common/modelTypes";

import * as api from "../../api/index";

export const getHoldings = (userId: string) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchHoldings(userId);

    dispatch({ type: FETCH_ALL_HOLDINGS, payload: data });
  } catch (error: any) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const addHolding = (holding: HoldingItem) => async (dispatch: any) => {
  try {
    const { data } = await api.addHolding(holding); // data se hned destructuruje response, která má v sobě vždycky data object.

    dispatch({ type: ADD_HOLDING, payload: data });
  } catch (error: any) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const updateHolding =
  (name: string, holding: HoldingItem) => async (dispatch: any) => {
    try {
      const { data } = await api.updateHolding(name, holding);

      dispatch({ type: UPDATE_HOLDING, payload: data });
    } catch (error: any) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

//V případě, že držený amount klesne na 0, mažu z databaze.
export const deleteHolding = (formData: Object) => async (dispatch: any) => {
  try {
    const { data } = await api.deleteHolding(formData);

    console.log(data);
    dispatch({ type: DELETE_HOLDING, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};
