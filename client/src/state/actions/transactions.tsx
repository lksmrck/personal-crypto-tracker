import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../../constants/actionTypes";
import { Transaction, FormItem } from "../../common/modelTypes";

import * as api from "../../api/index";

export const getTransactions = (userId: string) => async (dispatch: any) => {
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
  (transaction: FormItem) => async (dispatch: any) => {
    try {
      const { data } = await api.addTransaction(transaction);

      dispatch({ type: ADD_TRANSACTION, payload: data });
    } catch (error: any) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
