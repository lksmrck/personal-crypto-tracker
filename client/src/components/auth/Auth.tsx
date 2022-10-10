import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { FiLock } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";

import { StyledAuth } from "./styled";
import AuthInput from "./AuthInput";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import { gapi } from "gapi-script";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { registerUser, loginUser } from "../../state/actions/auth";
import { CLEAR_AUTH_ERROR, SET_ERROR } from "../../constants/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [isRegistration, setIsRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);

  const clientID =
    "1065422573478-630fs1ejaapidoaot95o16c8s0v2khnl.apps.googleusercontent.com";
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!passwordValid) {
      setPasswordValid(true);
    }
    if (authState.error) {
      dispatch({ type: CLEAR_AUTH_ERROR });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value }); //narolluje všechny staré formData a změní pouze ty, které se rovanjí name (např firstName v objektu = firstName name inputu) a priradi tam current value. PŘEDPOKLAD: POLOŽKY V OBJEKTU = NAME INPUTŮ
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (isRegistration) {
      if (formData.password.length >= 6) {
        dispatch(registerUser(formData, history));
      } else {
        setPasswordValid(false);
      }
    } else {
      dispatch(loginUser(formData, history));
    }
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
      dispatch({
        type: SET_ERROR,
        payload: "An error occured during the Google sign in.",
      });
    }
  };

  const googleFailure = (error: any) => {
    dispatch({
      type: SET_ERROR,
      payload: "An error occured during the Google sign in.",
    });
  };

  return (
    <StyledAuth>
      <Container maxWidth="xs">
        <Paper className="paper" elevation={3}>
          <Avatar className="avatar">
            <FiLock />
          </Avatar>
          <Typography variant="h5">
            {isRegistration ? "Sign Up" : "Sign In"}
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isRegistration && (
                <>
                  <AuthInput
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <AuthInput
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <AuthInput
                name="email"
                label="E-mail Address"
                handleChange={handleChange}
                type="email"
              />
              <AuthInput
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={() =>
                  setShowPassword((prevState) => !prevState)
                }
              />
              {isRegistration && (
                <AuthInput
                  name="confirmPassword"
                  label="Confirm Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            {isRegistration && !passwordValid && (
              <Typography sx={{ color: "red" }}>
                Password must have at least 6 letters.
              </Typography>
            )}

            {authState?.error && (
              <Typography sx={{ color: "red" }}>
                {authState.errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              {isRegistration ? "Sign Up" : "Sign In"}
            </Button>
            <GoogleLogin
              clientId={clientID}
              render={(renderProps) => (
                <Button
                  color="primary"
                  className="google-button"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<AiOutlineGoogle />}
                  variant="contained"
                >
                  Sign in with Google
                </Button>
              )}
              cookiePolicy="single_host_origin"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  onClick={() => setIsRegistration((prevState) => !prevState)}
                >
                  {isRegistration
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </StyledAuth>
  );
};
export default Auth;
