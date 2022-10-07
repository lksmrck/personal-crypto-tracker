import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import React from "react";

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
  );
};

export default TransactionType;
