import {
  CLEAR_ERROR,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../../constants/actionTypes";

const errorState = { isError: false, errorMessage: "", loading: false };

export default (error = errorState, action: any) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...errorState, isError: true, errorMessage: action.payload };
    case CLEAR_ERROR:
      return { ...errorState, isError: false, errorMessage: null };
    case START_LOADING:
      return { ...errorState, loading: true };

    case STOP_LOADING:
      return { ...errorState, loading: false };
    default:
      return error;
  }
};
