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
            <Button component={Link} to="/add_transaction" variant="contained">
              Add Transaction
            </Button>
            <Button component={Link} to="/holdings" variant="contained">
              My holdings
            </Button>
            <Button component={Link} to="/transactions" variant="contained">
              Transaction history
            </Button>
          </div>
        </div>
        <div className="home-dashboard"></div>
      </div>
    </StyledHomePage>
  );
}
