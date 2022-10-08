import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import React from "react";
import { StyledTransactionType } from "./styled";

type TransactionTypeProps = {
  buySell: "buy" | "sell";
  handleBuySellChange: (
    e: React.MouseEvent<HTMLElement>,
    newBuySell: "buy" | "sell"
  ) => void;
};

const TransactionType: React.FC<TransactionTypeProps> = ({
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
        <ToggleButton color="success" value="buy">
          Buy
        </ToggleButton>
        <ToggleButton color="error" value="sell">
          Sell
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledTransactionType>
  );
};

export default TransactionType;
