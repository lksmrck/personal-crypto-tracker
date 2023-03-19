import { useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import decode from "jwt-decode";
import { StyledNavContainer, StyledNavbar } from "./styled";
import logoDogHalf from "../../assets/logoDogHalf.png";
import { useAppDispatch } from "../../state/hooks";
import { useHistory, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";
import MyButton from "./MyButton";

interface DecodedToken {
  email: string;
  id: string;
  iat: number;
  exp: number;
}

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();

  const lsUser = localStorage.getItem("profile");
  //If user is logged in (saved in LS)
  const [user, setUser] = useState(lsUser !== null ? JSON.parse(lsUser) : null);

  useEffect(() => {
    const token = user?.token;

    //If token expired, onClickLogout is called and user is logged out.
    if (token) {
      const decodedToken: DecodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        onClickLogout();
      }
    }

    if (lsUser !== null) {
      setUser(JSON.parse(lsUser));
    }
  }, [location]);

  const onClickLogin = (): void => {
    history.push("/auth");
  };
  const onClickLogout = (): void => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <StyledNavContainer>
      <div className="nav-logo" onClick={() => history.push("/dashboard")}>
        <img src={logoDogHalf} height="70px" width="70px" />
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
          {/* Right side of Navbar*/}
          {user?.result ? (
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
