import { StyledHomePage } from "./styled";
import { Link } from "react-router-dom";
import MyButton from "../layout/MyButton";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <StyledHomePage>
      <div className="home-container">
        <div className="header-container">
          <h2>Welcome to Crypto Tracker</h2>
        </div>
        <div className="buttons-container">
          <MyButton
            text="My holdings"
            purple
            component={Link}
            to="/holdings"
            variant="contained"
          />
          <MyButton
            text="Transaction history"
            purple
            component={Link}
            to="/transactions"
            variant="contained"
          />
        </div>
      </div>
    </StyledHomePage>
  );
};
export default HomePage;
