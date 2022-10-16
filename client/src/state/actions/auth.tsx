import {
  AUTH,
  AUTH_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../../constants/actionTypes";
import { AuthData } from "../../common/modelTypes";
import { AppDispatch } from "../..";
import axios from "axios";

import * as api from "../../api/index";

export const loginUser =
  (formData: AuthData, history: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.loginUser(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
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
      dispatch({
        type: AUTH_ERROR,
        data: errMsg,
      });
    }
  };

export const registerUser =
  (formData: AuthData, history: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.registerUser(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
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

      dispatch({
        type: AUTH_ERROR,
        data: errMsg,
      });
    }
  };
