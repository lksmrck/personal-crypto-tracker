import { useContext, useEffect } from "react";
import btc_icon from "../../assets/bitcoin-logo.png";
import { StyledStatisticsCard } from "./styled";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { HoldingItem } from "../../common/modelTypes";
import IconButton from "@mui/material/IconButton";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { intlNumberFormat } from "../../utils/number-format";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getHoldings } from "../../state/actions/statistics";
import { lsUserId } from "../../utils/ls-userId";
import { DashboardCryptoItem } from "../../common/modelTypes";

const StatisticsCard = () => {
  // tady bude useEffect, který se bude aktualizovat při fetchi (při změně statistics array)
  const context = useContext(DashboardContext);
  const formContext = useContext(FormContext);
  const dispatch = useAppDispatch();

  /*  const auth = useAppSelector((state: RootState) => state.auth); */

  const userId = lsUserId();
  //Vytáhnutí userId z localStorage

  /* const userId = auth.authData.result._id; */

  const dashboardCryptoData = context?.dashboardData;

  useEffect(() => {
    context?.getDashboardData();
    dispatch(getHoldings(userId));
  }, [dispatch]);

  const holdings = useSelector((state: RootState) => state.statistics);

  return (
    <>
      {holdings.map((holding: HoldingItem) => {
        const cryptoObject = dashboardCryptoData?.find(
          (item: DashboardCryptoItem) =>
            item.name.toLowerCase() === holding.name.toLowerCase()
        );
        const PLUSD =
          holding.amount * cryptoObject?.current_price! -
          holding.amount * holding.price;

        const PLpercentage = PLUSD / (holding.amount * holding.price);
        const lastUpdate = new Date(cryptoObject?.last_updated!);

        return (
          //Pokud je držené množství > 0, vyrenderuje holding card
          holding.amount > 0 && (
            <StyledStatisticsCard>
              <div className="stats-container">
                <div className="stats-title">
                  <img
                    src={cryptoObject?.imageURL}
                    alt="icon"
                    width="60px"
                    height="60px"
                  />
                  <h1>{holding.name.toUpperCase()}</h1>
                </div>

                <div className="text-container">
                  <p>
                    <span className="holding-headings">
                      Market price per unit:{" "}
                    </span>
                    <span className="holding-price">
                      {intlNumberFormat(cryptoObject?.current_price!, "usd")}
                    </span>
                  </p>
                  <p>
                    <span className="holding-headings">
                      Average purchase price:
                    </span>{" "}
                    {intlNumberFormat(holding.price, "usd")}
                  </p>
                  <p>
                    <span className="holding-headings">Holding amount: </span>{" "}
                    {holding.amount}
                  </p>
                  <p>
                    <span className="holding-headings">P/L USD: </span>
                    <span
                      className={
                        PLUSD > 0 ? "positive-change" : "negative-percentage"
                      }
                    >
                      {intlNumberFormat(PLUSD, "usd")}
                    </span>
                  </p>
                  <p>
                    <span className="holding-headings">P/L %:</span>{" "}
                    <span
                      className={
                        PLpercentage > 0
                          ? "positive-change"
                          : "negative-percentage"
                      }
                    >{`${PLpercentage.toFixed(2)}%`}</span>
                  </p>
                  <p>
                    <span className="holding-headings">Last transaction: </span>
                    <span> {holding.date}</span>
                  </p>
                  <p>
                    <span className="holding-headings">Last updated: </span>
                    <span> {lastUpdate.toLocaleTimeString()}</span>
                  </p>

                  <IconButton
                    onClick={() => {
                      formContext?.setFormShown(true);
                      formContext?.setSelectedCrypto(
                        holding.name.toLowerCase()
                      );
                      formContext?.setTransactionType("buy");
                    }}
                  >
                    <BiPlusCircle
                      style={{
                        color: "green",
                        width: "45px",
                        height: "45px",
                      }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      formContext?.setFormShown(true);
                      formContext?.setSelectedCrypto(
                        holding.name.toLowerCase()
                      );
                      formContext?.setTransactionType("sell");
                    }}
                  >
                    <BiMinusCircle
                      style={{
                        color: "red",
                        width: "45px",
                        height: "45px",
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            </StyledStatisticsCard>
          )
        );
      })}
    </>
  );
};

export default StatisticsCard;
