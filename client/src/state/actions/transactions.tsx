import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  SET_ERROR,
} from "../../constants/actionTypes";

import * as api from "../../api/index";

export const getTransactions = (userId: any) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchTransactions(userId);

    dispatch({ type: FETCH_ALL_TRANSACTIONS, payload: data });
  } catch (error: any) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const addTransaction = (transaction: any) => async (dispatch: any) => {
  try {
    const { data } = await api.addTransaction(transaction);

    dispatch({ type: ADD_TRANSACTION, payload: data });
  } catch (error: any) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
