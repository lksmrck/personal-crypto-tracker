import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";

interface HamburgerMenuProps {
  isUserLogged: boolean;
  setIsUserLogged: any;
}

const HamburgerMenu = ({
  isUserLogged,
  setIsUserLogged,
}: HamburgerMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log(anchorEl);
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    handleClose();
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setIsUserLogged();
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <GiHamburgerMenu
          style={{
            color: "white",
            width: "30px",
            height: "30px",
          }}
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/dashboard");
          }}
        >
          Dashboard
        </MenuItem>
        {isUserLogged ? (
          <>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/holdings");
              }}
            >
              Holdings
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/transactions");
              }}
            >
              Transactions
            </MenuItem>
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleClose}>Sign In</MenuItem>
        )}
      </Menu>
    </div>
  );
};
export default HamburgerMenu;
