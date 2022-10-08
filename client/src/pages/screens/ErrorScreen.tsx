import React from "react";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { RootState } from "../..";
import { Button } from "@mui/material";
import { CLEAR_ERROR } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
import { StyledErrorScreen } from "./styled";

export default function ErrorScreen() {
  const error = useAppSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const clearErrorAndGoDashboard = () => {
    dispatch({ type: CLEAR_ERROR });
    history.push("/dashboard");
  };

  return (
    <StyledErrorScreen>
      <div className="container">
        <h1>Something went wrong</h1>
        <h1>{error.errorMessage}</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={clearErrorAndGoDashboard}
        >
          Back to dashboard
        </Button>
      </div>
    </StyledErrorScreen>
  );
}
