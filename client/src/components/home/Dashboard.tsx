import { StyledDashboard } from "./styled";
import DashboardItem from "./DashboardItem";
import { DashboardCryptoItem } from "../../store/statistics-slice";

const DUMMY_DATA = [
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
];

export default function Dashboard() {
  return (
    <StyledDashboard>
      {DUMMY_DATA.map((item: DashboardCryptoItem) => {
        return (
          <DashboardItem
            ticker={item.ticker}
            name={item.name}
            price={item.price}
            dayMovement={item.dayMovement}
            marketCap={item.marketCap}
          />
        );
      })}
    </StyledDashboard>
  );
}
