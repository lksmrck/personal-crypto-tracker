import btc_icon from "../../assets/bitcoin-logo.png";
import { Button } from "@mui/material";
import { StyledStatisticsCard } from "./styled";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { CryptoItem } from "../../common/modelTypes";

const StatisticsCard = () => {
  // tady bude useEffect, který se bude aktualizovat při fetchi (při změně statistics array)

  const holdings = useSelector((state: RootState) => state.statistics);

  return (
    <>
      {holdings.map((holding: CryptoItem) => {
        return (
          <StyledStatisticsCard>
            <div className="stats-container">
              <div className="stats-title">
                <img src={btc_icon} alt="icon" width="50px" height="50px" />
                <h1>{holding.name.toUpperCase()}</h1>
              </div>

              <div className="text-container">
                <p>
                  <span>Market price per unit:</span> TBD
                </p>
                <p>
                  <span>Average purchase price</span> {holding.price}
                </p>
                <p>
                  <span>Holding amount</span> {holding.amount}
                </p>
                <p>
                  <span>P/L USD</span> to be calculated
                </p>
                <p>
                  <span>P/L %</span> <span>to be calculated</span>
                </p>
                <p>
                  <span>Last transaction</span> {holding.date}
                </p>
                <p>
                  <span>Last updated</span> bude dotaženo
                </p>
                <BiPlusCircle />
              </div>
            </div>
          </StyledStatisticsCard>
        );
      })}
    </>
  );
};

export default StatisticsCard;
