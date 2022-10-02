import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const pages = ["Dashboard", "Holdings", "Transactions"];
const settings = ["Logout"];

const Navbar = () => {
  const lsUser = localStorage.getItem("profile");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(lsUser !== null ? JSON.parse(lsUser) : null);

  useEffect(() => {
    const token = user?.token;

    //JWT - potom při manual auth
    if (lsUser !== null) {
      setUser(JSON.parse(lsUser));
    }
  }, [location]); //==> when location changes (z /auth na / tak set user)

  const [anchorElNav, setAnchorElNav] = React.useState<HTMLInputElement | null>(
    null
  );
  const [anchorElUser, setAnchorElUser] =
    React.useState<HTMLInputElement | null>(null);

  const handleOpenUserMenu = (event: any): void => {
    //UPRAVIT TYPE
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    /* setAnchorElNav(null); */
    console.log(anchorElNav);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  const onClickHandler = (page: any) => {
    history.push(`/${page.toLowerCase()}`);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CRYPTO TRACKER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  /* onClick={handleCloseNavMenu} */ onClick={onClickHandler}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                /*  onClick={handleCloseNavMenu} */
                onClick={() => onClickHandler(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user == null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Sign in">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    history.push("/auth");
                  }}
                >
                  SIGN IN
                </Button>
              </Tooltip>
              {/* <Tooltip title="Register">
              <Button variant="contained" color="error">
                Register
              </Button>
            </Tooltip> */}
            </Box>
          ) : (
            <div>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.result.name} src={user.result.imageUrl} />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography variant="h6" noWrap>
                {user.result.name}
              </Typography>
            </div>
          )}

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
