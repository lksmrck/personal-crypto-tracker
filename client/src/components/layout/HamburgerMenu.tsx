import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../state/hooks";
import { firstLetterCapitalized } from "../../utils/text-format";

interface HamburgerMenuProps {
  isUserLogged: boolean;
  setIsUserLogged: any;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isUserLogged,
  setIsUserLogged,
}: HamburgerMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const menuItemsLogged = ["holdings", "transactions"];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
          <div>
            {menuItemsLogged.map((item: string) => {
              return (
                <MenuItem
                  key={item}
                  onClick={() => {
                    handleClose();
                    history.push(`/${item}`);
                  }}
                >
                  {firstLetterCapitalized(item)}
                </MenuItem>
              );
            })}
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </div>
        ) : (
          <MenuItem
            onClick={() => {
              handleClose();
              history.push("/auth");
            }}
          >
            Sign In
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};
export default HamburgerMenu;
