import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { StyledHeader, StyledNavbar } from "./styled";
import { Button } from "@mui/material";

import { useAppDispatch } from "../../state/hooks";
import { useHistory, useLocation } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

const Navbar = () => {
  /*  const userId = lsUserId(); */
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();

  const lsUser = localStorage.getItem("profile");
  const [user, setUser] = useState(lsUser !== null ? JSON.parse(lsUser) : null);

  useEffect(() => {
    const token = user?.token;

    //JWT - potom při manual auth
    if (lsUser !== null) {
      setUser(JSON.parse(lsUser));
    }
  }, [location]); //==> when location changes (z /auth na / tak set user)

  const onClickLogin = () => {
    history.push("/auth");
  };
  const onClickLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <StyledHeader>
      <div className="nav-logo">
        <div>Crypto</div>
        <div className="logo-tracker">Tracker</div>
      </div>
      <StyledNavbar>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/holdings" activeClassName="active">
                  Holdings
                </NavLink>
              </li>
              <li>
                <NavLink to="/transactions" activeClassName="active">
                  Transactions
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <section className="button-wrapper">
          {!user ? (
            <Button variant="contained" onClick={onClickLogin}>
              Sign Up
            </Button>
          ) : (
            <div className="logged-in">
              <Avatar alt={user.result.name} src={user.result.imageUrl} />
              <Typography noWrap variant="h6">
                {user.result.name}
              </Typography>
              <Button variant="contained" color="error" onClick={onClickLogout}>
                Logout
              </Button>
            </div>
          )}
        </section>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Navbar;
