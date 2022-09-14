import React from "react";
import { DashboardCryptoItem } from "../../store/statistics-slice";
import { StyledDashboardItem } from "./styled";

const DashboardItem: React.FC<DashboardCryptoItem> = ({
  ticker,
  name,
  price,
  dayMovement,
  marketCap,
}) => {
  return (
    <StyledDashboardItem>
      <div className="transactions-title">
        <span>Number</span>
        <span>Name</span>
        <span>Price</span>
        <span>Amount</span>
        <span>TransactionType</span>
      </div>
      <div>
        <span>{ticker}</span>
        <span>{name}</span>
        <span>{price}</span>
        <span>{dayMovement}</span>
        <span>{marketCap}</span>
      </div>
    </StyledDashboardItem>
  );
};

export default DashboardItem;
