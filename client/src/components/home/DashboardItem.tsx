import React, {
  useState,
  useContext,
  useEffect,
  MouseEventHandler,
} from "react";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { StyledDashboardItem } from "./styled";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { firstLetterCapitalized } from "../../utils/text-format";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";
import { GrTransaction } from "react-icons/gr";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

const DashboardItem: React.FC = () => {
  /* const {getDashboardData} = useContext(DashboardContext) */
  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;

  const history = useHistory();

  const formContext = useContext(FormContext);

  useEffect(() => {
    context?.getDashboardData();
  }, []);

  const dashboardItemClickHandler = (crypto: any): any => {
    formContext?.setSelectedCrypto(crypto);
    formContext?.setFormShown(true);
    history.push("/holdings");
  };
  /* 
  const [dashboardItems, setDashboardItems] = useState(DUMMY_DATA); */
  return (
    <StyledDashboardItem>
      <div className="dashboard-headings-container">
        <span className="number-heading">#</span>
        <span className="name-heading">Name</span>
        <span className="price-heading">Price</span>
        <span className="market-cap-heading">Market cap</span>
        <span className="movement-heading">24h change</span>
        <span className="last-update-heading">Last updated</span>
      </div>
      {dashboardCryptoData.map((item: any, index: number) => {
        const lastUpdate = new Date(item?.last_updated);

        return (
          <div
            className="data-container"
            onClick={() => dashboardItemClickHandler(item.name.toLowerCase())}
          >
            <div className="coin-number">
              <span>{index + 1}</span>
            </div>
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
            <div>
              <span>{lastUpdate.toLocaleTimeString()}</span>
            </div>
            <span className="trade-icon">
              {/* <IconButton>
                <GrTransaction  />
              </IconButton> */}
            </span>
          </div>
        );
      })}
    </StyledDashboardItem>
  );
};

export default DashboardItem;
