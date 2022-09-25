import { createContext, useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import axios from "axios";

interface AppContextInterface {
  setDashboardData: Dispatch<SetStateAction<string>>;
  getDashboardData: () => void;
  dashboardData: any;
}

const DashboardContext = createContext<AppContextInterface | null>(null);

export const DashboardContextProvider: React.FC<{
  children: any;
}> = ({ children }) => {
  const [dashboardData, setDashboardData] = useState<any>([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h";

  const getDashboardData = () => {
    axios
      .get(url)
      .then((res) => {
        setDashboardData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DashboardContext.Provider
      value={{
        setDashboardData,
        getDashboardData,
        dashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardContext;
