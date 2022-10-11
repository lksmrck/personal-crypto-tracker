import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../../constants/actionTypes";
import { Transaction } from "../../common/modelTypes";
import { AppDispatch } from "../..";

import * as api from "../../api/index";

export const getTransactions =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchTransactions(userId);

      dispatch({ type: FETCH_ALL_TRANSACTIONS, payload: data });
      if (data) {
        setTimeout(() => {
          dispatch({ type: STOP_LOADING });
        }, 100);
        /*  clearTimeout(loaded); */
      }
    } catch (error: any) {
      dispatch({ type: STOP_LOADING });
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

export const addTransaction =
  (transaction: Transaction) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await api.addTransaction(transaction);

      dispatch({ type: ADD_TRANSACTION, payload: data });
    } catch (error: any) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
