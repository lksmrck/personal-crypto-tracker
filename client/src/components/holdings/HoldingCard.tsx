import { useContext } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { Grid, Paper, Container } from "@mui/material";
import { RootState } from "../..";
import { HoldingItem } from "../../common/modelTypes";
import IconButton from "@mui/material/IconButton";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { intlNumberFormat } from "../../utils/number-format";
import { useAppSelector } from "../../state/hooks";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { formatDate } from "../../utils/date-format";
import { StyledHoldingCard } from "./styled";

const HoldingCard: React.FC = () => {
  const context = useContext(DashboardContext);
  const formContext = useContext(FormContext);

  const dashboardCryptoData = context?.dashboardData;

  const holdings = useAppSelector((state: RootState) => state.holdings);

  return (
    <Container>
      <StyledHoldingCard>
        <Grid container spacing={2.5}>
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
            const lastTransaction = new Date(holding.date);

            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={holding.name}>
                <Paper className="card-paper">
                  <div className="card-header-container">
                    <div className="card-header-logo-name-container">
                      <img
                        src={cryptoObject?.imageURL}
                        alt="icon"
                        width="40px"
                        height="40px"
                      />
                      <h2>{holding.name}</h2>
                    </div>
                    <div className="card-header-price-container">
                      <h5 className="price">
                        {intlNumberFormat(cryptoObject?.current_price!, "usd")}
                      </h5>
                    </div>
                  </div>
                  <Grid container>
                    <Grid item xs={6} sm={6} md={6}>
                      <div className="titles-container">
                        <p>Average purchase price:</p>
                        <p>Holding amount:</p>
                        <p>Total purchase price:</p>
                        <p className="PL">Total P/L USD:</p>
                        <p className="PL">Total P/L %:</p>
                        <hr></hr>
                        <p>Last transaction:</p>
                        <p>Last updated:</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <div className="data-container">
                        <p>{intlNumberFormat(holding.price, "usd")}</p>
                        <p>{holding.amount}</p>
                        <p>
                          {intlNumberFormat(
                            holding.amount * holding.price,
                            "usd"
                          )}
                        </p>

                        <p
                          className={
                            PLUSD > 0 ? "positive-change" : "negative-change"
                          }
                        >
                          {intlNumberFormat(PLUSD, "usd")}
                        </p>
                        <p
                          className={
                            PLUSD > 0 ? "positive-change" : "negative-change"
                          }
                        >{`${PLpercentage.toFixed(2)}%`}</p>
                        <hr></hr>
                        <p>{formatDate(lastTransaction)}</p>
                        <p>{lastUpdate.toLocaleTimeString()}</p>
                      </div>
                    </Grid>
                  </Grid>
                  <div className="card-buttons-container">
                    <IconButton
                      onClick={() => {
                        formContext?.setFormShown(true);
                        formContext?.setSelectedCrypto(holding.name);
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
                        formContext?.setSelectedCrypto(holding.name);
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
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </StyledHoldingCard>
    </Container>
  );
};

export default HoldingCard;
