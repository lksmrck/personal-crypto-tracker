import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { StyledNeedToLogin } from "./styled";

export default function NeedToLogin() {
  const history = useHistory();

  return (
    <StyledNeedToLogin>
      <div className="container">
        <h1>You need to sign up to see this page.</h1>

        <Button
          variant="contained"
          onClick={() => {
            history.push("/auth");
          }}
        >
          Sign Up
        </Button>
      </div>
    </StyledNeedToLogin>
  );
}
