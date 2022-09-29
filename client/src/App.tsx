import { useEffect } from "react";
import HomeDashboard from "./pages/HomeDashboard";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";
import { getTransactions } from "./state/actions/transactions";
import { DashboardContextProvider } from "./state/DashboardContext";
import Navbar from "./components/layout/Navbar";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";
import { Route, Redirect } from "react-router-dom";
import { FormContextProvider } from "./state/FormContext";

function App() {
  const dispatch = useAppDispatch();

  //Fetch holdings z databáze - TADY NEBO V HOLDINGS/TRANSACTIONS KOMPONENTU?????
  useEffect(() => {
    dispatch(getHoldings());
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="App">
      <DashboardContextProvider>
        <Navbar />
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <FormContextProvider>
          <Route path="/dashboard">
            <HomeDashboard />
          </Route>
          <Route path="/holdings">
            <Holdings />
          </Route>
        </FormContextProvider>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </DashboardContextProvider>
    </div>
  );
}

export default App;
