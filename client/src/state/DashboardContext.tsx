import { createContext, useState } from "react";

interface AppContextInterface {
  setCryptoData: any;
}

const DashboardContext = createContext<AppContextInterface | null>(null);

export const DashboardContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [cryptoData, setCryptoData] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h";

  return (
    <DashboardContext.Provider
      value={{
        setCryptoData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardContext;
