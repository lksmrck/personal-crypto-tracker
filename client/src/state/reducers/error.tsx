import { CLEAR_ERROR, SET_ERROR } from "../../constants/actionTypes";

const errorState = { isError: false, errorMessage: "" };

export default (error = errorState, action: any) => {
  switch (action.type) {
    case SET_ERROR:
      return { isError: true, errorMessage: action.payload };
    case CLEAR_ERROR:
      return { isError: false, errorMessage: null };

    default:
      return error;
  }
};
