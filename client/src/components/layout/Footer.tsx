import { StyledFooter } from "./styled";
import logo from "../../assets/LogoPic.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} height="50px" width="50px" />
            <h4>CryptoTracker</h4>
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
