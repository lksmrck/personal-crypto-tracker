import { AUTH, AUTH_ERROR } from "../../constants/actionTypes";

import * as api from "../../api/index";

export const loginUser =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      //log in the user (call the backend endpoints)
      const { data } = await api.loginUser(formData);
      dispatch({ type: AUTH, data });
      console.log(data.result._id);
      history.push("/");
    } catch (error: any) {
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: AUTH_ERROR,
        data: errMsg,
      });
    }
  };

export const registerUser =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      //register in the user
      const { data } = await api.registerUser(formData);
      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error: any) {
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: AUTH_ERROR,
        data: errMsg,
      });
    }
  };
