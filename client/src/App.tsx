import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";
import { getTransactions } from "./state/actions/transactions";

function App() {
  const dispatch = useAppDispatch();

  //Fetch holdings z databáze
  useEffect(() => {
    dispatch(getHoldings());
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
