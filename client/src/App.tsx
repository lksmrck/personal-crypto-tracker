import HomeDashboard from "./pages/HomeDashboard";
import { DashboardContextProvider } from "./state/DashboardContext";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";
import Auth from "./components/auth/Auth";
import { Route, Redirect, Switch } from "react-router-dom";
import { FormContextProvider } from "./state/FormContext";
import Navbar from "./components/layout/Navbar";
import { useAppSelector } from "./state/hooks";
import { RootState } from ".";
import ErrorScreen from "./pages/screens/ErrorScreen";

function App() {
  const error = useAppSelector((state: RootState) => state.error);

  return (
    <DashboardContextProvider>
      <Navbar />
      {error.isError ? (
        <ErrorScreen />
      ) : (
        <>
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
        </>
      )}
    </DashboardContextProvider>
  );
}

export default App;
