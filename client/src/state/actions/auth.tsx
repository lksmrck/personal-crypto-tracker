import { AUTH, AUTH_ERROR } from "../../constants/actionTypes";
import { AuthData } from "../../common/modelTypes";
import { AppDispatch } from "../..";

import * as api from "../../api/index";

export const loginUser =
  (formData: AuthData, history: any) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await api.loginUser(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (error: any) {
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
      const { data } = await api.registerUser(formData);
      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error: any) {
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
