import btc_icon from "../../assets/bitcoin-logo.png";
import { Button } from "@mui/material";
import { StyledStatisticsCard } from "./styled";

export default function StatisticsCard() {
  return (
    <StyledStatisticsCard>
      <img src={btc_icon} alt="icon" width="50px" height="50px" />
      <div className="text-container">
        <p>
          <span>Market price per unit:</span> 25$
        </p>
        <p>
          <span>Average purchase price</span> 14$
        </p>
        <p>
          <span>Holding amount</span> 50$
        </p>
        <p>
          <span>P/L USD</span> 24$
        </p>
        <p>P/L %</p>
        <Button>Add transaction</Button> {/* Dát spíš ikonu s pluskem */}
      </div>
    </StyledStatisticsCard>
  );
}
