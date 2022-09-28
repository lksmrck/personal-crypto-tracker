import { useEffect } from "react";
import HomeDashboard from "./pages/HomeDashboard";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";
import { getTransactions } from "./state/actions/transactions";
import { DashboardContextProvider } from "./state/DashboardContext";
import Navbar from "./components/layout/Navbar";
import AddTransaction from "./pages/AddTransaction";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";

function App() {
  const dispatch = useAppDispatch();

  //Fetch holdings z databáze
  useEffect(() => {
    dispatch(getHoldings());
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="App">
      <DashboardContextProvider>
        <Navbar />
        <HomeDashboard />
        <AddTransaction />
        <Holdings />
        <Transactions />
      </DashboardContextProvider>
    </div>
  );
}

export default App;
