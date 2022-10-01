import React, { useState, useEffect } from "react";
import Input from "../Input";
import { Button } from "@mui/material";
import { StyledAuth } from "./styled";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const clientID =
    "1065422573478-630fs1ejaapidoaot95o16c8s0v2khnl.apps.googleusercontent.com";
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  };

  const googleSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<void> => {
    let result;
    let token;
    if ("profileObj" in res) {
      result = res?.profileObj;
      token = res?.tokenId;
    }

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error: any) => {
    console.log(error);
    console.log("Google sign in was unsuccesful.");
  };

  return (
    <StyledAuth>
      <div className="auth-container">
        <Input
          label=""
          input={{
            id: "Name",
            type: "text",
          }}
        />
        <Input
          label=""
          input={{
            id: "E-mail",
            type: "e-mail",
          }}
        />
        <div className="buttons-container">
          <GoogleLogin
            clientId={clientID}
            buttonText="Sign in with Google"
            /*      render={(renderProps) => (
              <Button
                variant="contained"
                onClick={renderProps.onClick}
                
                startIcon={<AiOutlineGoogle />}
              >
                Google Sign In
              </Button>
            )} */
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Button variant="contained">Login</Button>
          <Button variant="contained">Back</Button>
        </div>
      </div>
    </StyledAuth>
  );
}
