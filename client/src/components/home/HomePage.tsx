import Dashboard from "./Dashboard";
import { StyledHomePage } from "./styled";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className="home-container">
        <div className="home-nav">
          <h1>Welcome to Crypto Tracker ☄️</h1>
          <div className="buttons-container">
            <Button variant="contained">Add Transaction</Button>
            <Button variant="contained">Holding statistics</Button>
            <Button variant="contained">Transaction history</Button>
          </div>
        </div>
        <div className="home-dashboard"></div>
      </div>
    </StyledHomePage>
  );
}
