import { StyledFooter } from "./styled";
import logo from "../../assets/LogoPic.png";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} height="50px" width="50px" />
            <h4>CryptoTracker</h4>
          </div>
          <div className="row-icons">
            <IconButton sx={{ color: "#e6fcfc" }}>
              <FiTwitter size={25} />
            </IconButton>
            <IconButton sx={{ color: "#e6fcfc" }}>
              <FiFacebook size={25} />
            </IconButton>
            <IconButton sx={{ color: "#e6fcfc" }}>
              <FiInstagram size={25} />
            </IconButton>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="text-left">
            &copy;{new Date().getFullYear()} CryptoTracker | All rights reserved
          </p>
          <p className="text-right">Made with ❤️ in Střížkov</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
