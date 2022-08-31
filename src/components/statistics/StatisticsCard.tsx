import btc_icon from "../../assets/bitcoin-logo.png";
import { Button } from "@mui/material";
import { StyledStatisticsCard } from "./styled";

export default function StatisticsCard() {
  return (
    <StyledStatisticsCard>
      <img src={btc_icon} alt="icon" />
      <div className="text-container">
        <p>Market price</p>
        <p>Average purchase price</p>
        <p>Holding amount</p>
        <p>P/L USD</p>
        <p>P/L %</p>
        <Button>Add transaction</Button> {/* Dát spíš ikonu s pluskem */}
      </div>
    </StyledStatisticsCard>
  );
}
