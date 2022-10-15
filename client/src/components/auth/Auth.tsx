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
import { CLEAR_AUTH_ERROR, AUTH_ERROR } from "../../constants/actionTypes";
import MyButton from "../layout/MyButton";
import LoadingSpinner from "../layout/LoadingSpinner";
import { RootState } from "../..";

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

  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);
  const loadingState = useAppSelector(
    (state: RootState) => state.errorAndLoading
  );

  const history = useHistory();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
    dispatch({ type: CLEAR_AUTH_ERROR });
  }, []);

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
    } catch (error: any) {
      const errMsg =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: AUTH_ERROR,
        data: errMsg,
      });
    }
  };

  const googleFailure = (error: any) => {
    const errMsg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: AUTH_ERROR,
      data: errMsg,
    });
  };

  return (
    <StyledAuth>
      {loadingState.loading ? (
        <LoadingSpinner />
      ) : (
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
              <MyButton
                type="submit"
                variant="contained"
                purple
                className="submit"
                fullWidth
                text={isRegistration ? "Sign Up" : "Sign In"}
              />
              <GoogleLogin
                clientId={clientID}
                render={(renderProps) => (
                  <MyButton
                    text="Sign in with google"
                    purple
                    className="google-button"
                    fullWidth
                    onClick={renderProps.onClick}
                    startIcon={<AiOutlineGoogle />}
                    variant="contained"
                  />
                )}
                cookiePolicy="single_host_origin"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
              />
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={() => setIsRegistration((prevState) => !prevState)}
                    sx={{ color: "purple" }}
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
      )}
    </StyledAuth>
  );
};
export default Auth;
