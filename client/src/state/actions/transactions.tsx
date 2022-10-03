import {
  FETCH_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
} from "../../constants/actionTypes";

import * as api from "../../api/index";

export const getTransactions = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchTransactions();

    dispatch({ type: FETCH_ALL_TRANSACTIONS, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addTransaction = (transaction: any) => async (dispatch: any) => {
  try {
    const { data } = await api.addTransaction(transaction);

    dispatch({ type: ADD_TRANSACTION, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};
