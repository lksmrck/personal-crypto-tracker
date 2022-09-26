import { useContext, useEffect } from "react";
import btc_icon from "../../assets/bitcoin-logo.png";
import { StyledStatisticsCard } from "./styled";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { CryptoItem } from "../../common/modelTypes";
import IconButton from "@mui/material/IconButton";
import DashboardContext from "../../state/DashboardContext";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";

const StatisticsCard = () => {
  // tady bude useEffect, který se bude aktualizovat při fetchi (při změně statistics array)
  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;

  /*  useEffect(() => {
    context?.getDashboardData();
    const jedna = holdings[0].name.toLowerCase();
    const dva = dashboardCryptoData[0].name;

    console.log(jedna);
    console.log(dva);
  }, []); */

  const holdings = useSelector((state: RootState) => state.statistics);

  return (
    <>
      {holdings.map((holding: CryptoItem) => {
        const cryptoObject = dashboardCryptoData.find(
          (item: any) => item.name.toLowerCase() === holding.name.toLowerCase()
        );
        const PLUSD =
          holding.amount * cryptoObject?.current_price -
          holding.amount * holding.price;

        const PLpercentage = PLUSD / (holding.amount * holding.price);

        return (
          <StyledStatisticsCard>
            <div className="stats-container">
              <div className="stats-title">
                <img
                  src={cryptoObject?.imageURL}
                  alt="icon"
                  width="50px"
                  height="50px"
                />
                <h1>{holding.name.toUpperCase()}</h1>
              </div>

              <div className="text-container">
                <p>
                  <span className="holding-price">Market price per unit:</span>{" "}
                  {intlNumberFormat(cryptoObject?.current_price, "usd")}
                </p>
                <p>
                  <span>Average purchase price</span>{" "}
                  {intlNumberFormat(holding.price, "usd")}
                </p>
                <p>
                  <span>Holding amount</span> {holding.amount}
                </p>
                <p>
                  <span>P/L USD </span>
                  {intlNumberFormat(PLUSD, "usd")}
                </p>
                <p>
                  <span
                    className={
                      PLpercentage > 0
                        ? "positive-change"
                        : "negative-percentage"
                    }
                  >
                    P/L %
                  </span>{" "}
                  <span>{`${PLpercentage.toFixed(2)}%`}</span>
                </p>
                <p>
                  <span>Last transaction</span> {holding.date}
                </p>
                <p>
                  <span>Last updated</span> {cryptoObject?.last_updated}
                </p>

                <IconButton>
                  <BiPlusCircle
                    style={{
                      color: "483196",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </StyledStatisticsCard>
        );
      })}
    </>
  );
};

export default StatisticsCard;
