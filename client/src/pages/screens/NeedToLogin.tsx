import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { StyledNeedToLogin } from "./styled";
import MyButton from "../../components/layout/MyButton";

const NeedToLogin: React.FC = () => {
  const history = useHistory();

  return (
    <StyledNeedToLogin>
      <div className="container">
        <h1>You need to sign in to see this page.</h1>
        <MyButton
          variant="contained"
          onClick={() => {
            history.push("/auth");
          }}
          text="Sign In"
          purple
        />
      </div>
    </StyledNeedToLogin>
  );
};
export default NeedToLogin;
