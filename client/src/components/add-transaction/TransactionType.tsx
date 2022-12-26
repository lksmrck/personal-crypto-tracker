import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FC } from "react";
import { StyledTransactionType } from "./styled";

type TransactionTypeProps = {
  buySell: string;
  handleBuySellChange: (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: "buy" | "sell"
  ) => void;
};

const TransactionType: FC<TransactionTypeProps> = ({
  buySell,
  handleBuySellChange,
}) => {
  return (
    <StyledTransactionType>
      <ToggleButtonGroup
        value={buySell}
        exclusive
        onChange={handleBuySellChange}
        className="select-transaction-type"
      >
        <ToggleButton
          value="buy"
          sx={{
            "&.MuiToggleButton-root": {
              backgroundColor: "#f0f0f0",
              color: "#797979",
            },
            "&&.MuiToggleButton-root:hover": {
              backgroundColor: "#025E03",
              color: "white",
            },
            "&.Mui-selected": { backgroundColor: "#008001", color: "white" },
            "&.Mui-selected:hover": { backgroundColor: "red", color: "white" },
          }}
        >
          Buy
        </ToggleButton>
        <ToggleButton
          value="sell"
          sx={{
            "&.MuiToggleButton-root": {
              backgroundColor: "#f0f0f0",
              color: "#797979",
            },
            "&&.MuiToggleButton-root:hover": {
              backgroundColor: "#A40A0A",
              color: "white",
            },
            "&.Mui-selected": { backgroundColor: "#C80B0B", color: "white" },
          }}
        >
          Sell
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledTransactionType>
  );
};

export default TransactionType;
