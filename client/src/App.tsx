import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";
import { getTransactions } from "./state/actions/transactions";
import { DashboardContextProvider } from "./state/DashboardContext";

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
        <MainPage />
      </DashboardContextProvider>
    </div>
  );
}

export default App;
