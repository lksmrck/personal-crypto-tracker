import React, { useState, useEffect } from "react";
import Input from "../Input";
import { Button } from "@mui/material";
import { StyledAuth } from "./styled";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useAppDispatch } from "../../state/hooks";
import { gapi } from "gapi-script";
import { useHistory } from "react-router-dom";
import { registerUser, loginUser } from "../../state/actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Auth() {
  const [formData, setFormData] = useState(initialState);

  const [registered, setRegistered] = useState(true);

  const clientID =
    "1065422573478-630fs1ejaapidoaot95o16c8s0v2khnl.apps.googleusercontent.com";
  const dispatch = useAppDispatch();
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

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (!registered) {
      dispatch(registerUser(formData, history));
    } else {
      dispatch(loginUser(formData, history));
    }
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //narolluje všechny staré formData a změní pouze ty, které se rovanjí name (např firstName v objektu = firstName name inputu) a priradi tam current value. PŘEDPOKLAD: POLOŽKY V OBJEKTU = NAME INPUTŮ
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
    <StyledAuth onSubmit={handleSubmit}>
      {registered ? (
        <div className="auth-container">
          <Input
            label=""
            input={{
              name: "email",
              id: "E-mail",
              type: "e-mail",
              onChange: handleChange,
            }}
          />
          <Input
            label=""
            input={{
              name: "password",
              id: "Password",
              type: "password",
              onChange: handleChange,
            }}
          />

          <GoogleLogin
            clientId={clientID}
            buttonText="Sign in with Google"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
          <Button
            onClick={() => {
              setRegistered(false);
            }}
            variant="contained"
          >
            Not registered? Register here
          </Button>
        </div>
      ) : (
        <div className="auth-container">
          <Input
            label=""
            input={{
              name: "firstName",
              id: "First name",
              type: "text",
              onChange: handleChange,
            }}
          />
          <Input
            label=""
            input={{
              name: "lastName",
              id: "Last name",
              type: "text",
              onChange: handleChange,
            }}
          />
          <Input
            label=""
            input={{
              name: "email",
              id: "E-mail",
              type: "e-mail",
              onChange: handleChange,
            }}
          />
          <Input
            label=""
            input={{
              name: "password",
              id: "Password",
              type: "password",
              onChange: handleChange,
            }}
          />
          <Input
            label=""
            input={{
              name: "confirmPassword",
              id: "Confirm password",
              type: "password",
              onChange: handleChange,
            }}
          />
          <div className="buttons-container">
            <Button type="submit" variant="contained">
              Register
            </Button>
            <Button
              onClick={() => {
                setRegistered(true);
              }}
              variant="contained"
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </StyledAuth>
  );
}
