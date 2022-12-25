import {
  FETCH_ALL_HOLDINGS,
  ADD_HOLDING,
  UPDATE_HOLDING,
  SET_ERROR,
  DELETE_HOLDING,
  START_LOADING,
  STOP_LOADING,
} from "../../constants/actionTypes";
import { HoldingItem } from "../../common/modelTypes";
import { Dispatch } from "@reduxjs/toolkit";
import {
  HoldingsTransactionsActions,
  ErrorLoadingActions,
} from "../../common/actionTypes";

import * as api from "../../api/index";

export const getHoldings =
  (userId: string) =>
  async (
    dispatch: Dispatch<HoldingsTransactionsActions | ErrorLoadingActions>
  ) => {
    try {
      dispatch({ type: START_LOADING });

      const { data } = await api.fetchHoldings(userId); //const response = await fetch(...)
      dispatch({ type: FETCH_ALL_HOLDINGS, payload: data });
      if (data) {
        setTimeout(() => {
          dispatch({ type: STOP_LOADING });
        }, 100);
      }
    } catch (error: any) {
      dispatch({ type: STOP_LOADING });
      const errMsg =
        error.response && error.response.data?.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SET_ERROR, payload: errMsg });
    }
  };

export const addHolding =
  (holding: HoldingItem) =>
  async (
    dispatch: Dispatch<HoldingsTransactionsActions | ErrorLoadingActions>
  ) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.addHolding(holding); // data se hned destructuruje response, která má v sobě vždycky data object.

      dispatch({ type: ADD_HOLDING, payload: data });
      if (data) {
        setTimeout(() => {
          dispatch({ type: STOP_LOADING });
        }, 100);
      }
    } catch (error: any) {
      dispatch({ type: STOP_LOADING });
      const errMsg =
        error.response && error.response.data?.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SET_ERROR, payload: errMsg });
    }
  };

export const updateHolding =
  (name: string, holding: HoldingItem) =>
  async (
    dispatch: Dispatch<HoldingsTransactionsActions | ErrorLoadingActions>
  ) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.updateHolding(name, holding);

      dispatch({ type: UPDATE_HOLDING, payload: data });
      if (data) {
        setTimeout(() => {
          dispatch({ type: STOP_LOADING });
        }, 100);
      }
    } catch (error: any) {
      dispatch({ type: STOP_LOADING });
      const errMsg =
        error.response && error.response.data?.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SET_ERROR, payload: errMsg });
    }
  };

//V případě, že držený amount klesne na 0, mažu z databaze.
export const deleteHolding =
  (formData: Object) =>
  async (
    dispatch: Dispatch<HoldingsTransactionsActions | ErrorLoadingActions>
  ) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.deleteHolding(formData);

      console.log(data);
      dispatch({ type: DELETE_HOLDING, payload: data });
      if (data) {
        setTimeout(() => {
          dispatch({ type: STOP_LOADING });
        }, 100);
      }
    } catch (error: any) {
      dispatch({ type: STOP_LOADING });
      const errMsg =
        error.response && error.response.data?.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SET_ERROR, payload: errMsg });
    }
  };
