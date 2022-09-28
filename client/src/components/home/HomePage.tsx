import Dashboard from "./Dashboard";
import { StyledHomePage } from "./styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className="home-container">
        <div className="home-nav">
          <h1>Welcome to Crypto Tracker ☄️</h1>
          <div className="buttons-container">
            <Link to="/add_transaction">
              <Button variant="contained">Add Transaction</Button>
            </Link>
            <Link to="/holdings">
              <Button variant="contained">My holdings</Button>
            </Link>
            <Link to="/transactions">
              <Button variant="contained">Transaction history</Button>
            </Link>
          </div>
        </div>
        <div className="home-dashboard"></div>
      </div>
    </StyledHomePage>
  );
}
