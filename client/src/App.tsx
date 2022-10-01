import { useEffect } from "react";
import HomeDashboard from "./pages/HomeDashboard";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";
import { getTransactions } from "./state/actions/transactions";
import { DashboardContextProvider } from "./state/DashboardContext";
import Navbar from "./components/layout/Navbar";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";
import Auth from "./components/auth/Auth";
import { Route, Redirect, Switch } from "react-router-dom";
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
        <Switch>
          <FormContextProvider>
            <Route path="/dashboard" exact component={HomeDashboard} />
            <Route path="/holdings" exact component={Holdings} />
            <Route path="/transactions" exact component={Transactions} />
            <Route path="/auth" exact component={Auth} />
          </FormContextProvider>
        </Switch>
      </DashboardContextProvider>
    </div>
  );
}

export default App;
