import React, { useState, useContext, useEffect } from "react";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { StyledDashboardItem } from "./styled";
import DashboardContext from "../../state/DashboardContext";

/* const DUMMY_DATA = [
  {
    ticker: "BTC",
    name: "Bitcoin",
    price: "22,000 USD",
    dayMovement: "7%",
    marketCap: "381000000",
  },
  {
    ticker: "ETH",
    name: "Ethereum",
    price: "1,580 USD",
    dayMovement: "-2%",
    marketCap: "193000000",
  },
  {
    ticker: "USDT",
    name: "Tether",
    price: "1 USD",
    dayMovement: "0%",
    marketCap: "67000000",
  },
  {
    ticker: "SOL",
    name: "Solana",
    price: "33.28 USD",
    dayMovement: "12%",
    marketCap: "11000000",
  },
]; */

const DashboardItem: React.FC = () => {
  /* const {getDashboardData} = useContext(DashboardContext) */
  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;

  useEffect(() => {
    context?.getDashboardData();
  }, []);
  /* 
  const [dashboardItems, setDashboardItems] = useState(DUMMY_DATA); */
  return (
    <StyledDashboardItem>
      <div className="transactions-title">
        <span>Ticker</span>
        <span>Name</span>
        <span>Price</span>
        <span>Market cap</span>
        <span>24h movement</span>
      </div>
      {dashboardCryptoData.map((item: any) => {
        return (
          <div>
            <span>{item.ticker}</span>
            <span>{item.name}</span>
            <span>{item.current_price}</span>
            <span>{item.market_cap}</span>
            <span>{item.price_change_percentage_24h}</span>
          </div>
        );
      })}
    </StyledDashboardItem>
  );
};

export default DashboardItem;
