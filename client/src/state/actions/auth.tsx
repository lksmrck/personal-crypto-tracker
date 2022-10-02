import { AUTH } from "../../constants/actionTypes.js";

import * as api from "../../api/index";
import { AnyAction } from "@reduxjs/toolkit";

export const login = (formData: any, history: any) => async (dispatch: any) => {
  try {
    //log in the user (call the backend endpoints)

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData: any, history: any) => (dispatch: any) => {
  try {
    //register in the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
