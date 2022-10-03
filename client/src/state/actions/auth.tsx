import { AUTH } from "../../constants/actionTypes";

import * as api from "../../api/index";
import { AnyAction } from "@reduxjs/toolkit";

export const loginUser =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      //log in the user (call the backend endpoints)
      const { data } = await api.loginUser(formData);
      dispatch({ type: AUTH, data });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export const registerUser =
  (formData: any, history: any) => async (dispatch: any) => {
    try {
      //register in the user
      const { data } = await api.registerUser(formData);
      dispatch({ type: AUTH, data });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
