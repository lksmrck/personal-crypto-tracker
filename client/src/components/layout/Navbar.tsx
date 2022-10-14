import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { StyledNavContainer, StyledNavbar } from "./styled";
import logo from "../../assets/LogoPic.png";
import { useAppDispatch } from "../../state/hooks";
import { useHistory, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";
import MyButton from "./MyButton";

const Navbar: React.FC = () => {
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
    <StyledNavContainer>
      <div className="nav-logo" onClick={() => history.push("/dashboard")}>
        <img src={logo} height="70px" width="70px" />
        <div className="logo-text">Crypto Tracker</div>
      </div>
      <StyledNavbar>
        <div>
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
        </div>
        <div className="right-side">
          {/* zacina prava cast Navbaru*/}
          {user ? (
            <>
              <div className="user">
                <Avatar
                  alt={user.result.name}
                  src={user.result.imageUrl}
                  sx={{ marginRight: "6%" }}
                />
                <p>{user.result.name}</p>
              </div>
              <div className="right-nav-button">
                <MyButton
                  text="Logout"
                  onClick={onClickLogout}
                  red
                  variant="contained"
                />
              </div>
            </>
          ) : (
            <div className="sign-in-button-container">
              <MyButton
                text="Sign In"
                onClick={onClickLogin}
                purple
                variant="contained"
                className="right-nav-button"
              />
            </div>
          )}
          <div className="hamburger">
            <HamburgerMenu
              isUserLogged={user}
              setIsUserLogged={() => setUser(null)}
            />
          </div>
        </div>
      </StyledNavbar>
    </StyledNavContainer>
  );
};

export default Navbar;
