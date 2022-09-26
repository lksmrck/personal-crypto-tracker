import React, { useState, useContext, useEffect } from "react";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { StyledDashboardItem } from "./styled";
import DashboardContext from "../../state/DashboardContext";
import { firstLetterCapitalized } from "../../utils/text-format";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";

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
      <div className="dashboard-headings-container">
        <span className="name-heading">Name</span>
        <span className="price-heading">Price</span>
        <span className="market-cap-heading">Market cap</span>
        <span className="movement-heading">24h movement</span>
      </div>
      {dashboardCryptoData.map((item: any) => {
        return (
          <div className="data-container">
            <div className="coin-name-container">
              <img src={item.imageURL} alt="icon" width="22px" height="22px" />
              <span className="coin-name">
                {firstLetterCapitalized(item.name)}
              </span>
              <span className="coin-ticker">{item.ticker.toUpperCase()}</span>
            </div>
            <div className="coin-price">
              <span>{intlNumberFormat(item.current_price, "usd")}</span>
            </div>
            <div className="market-cap">
              <span>{`$${numberFormat(item.market_cap)}`}</span>
            </div>
            <div className="coin-24h-percentage">
              <span
                className={
                  item.price_change_percentage_24h > 0
                    ? "positive-change"
                    : "negative-change"
                }
              >
                {" "}
                {`${item.price_change_percentage_24h.toFixed(2)}%`}
              </span>
            </div>
          </div>
        );
      })}
    </StyledDashboardItem>
  );
};

export default DashboardItem;
