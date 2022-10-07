import React from "react";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { RootState } from "../..";
import { Button } from "@mui/material";
import { CLEAR_ERROR } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";

export default function ErrorScreen() {
  const error = useAppSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const clearErrorAndGoDashboard = () => {
    dispatch({ type: CLEAR_ERROR });
    history.push("/dashboard");
  };

  return (
    <div>
      <p>Something went wrong</p>
      <p>{error.errorMessage}</p>
      <Button
        variant="contained"
        color="error"
        onClick={clearErrorAndGoDashboard}
      >
        Back to dashboard
      </Button>
    </div>
  );
}
