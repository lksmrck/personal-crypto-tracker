import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import { useAppDispatch } from "./state/hooks";
import { getHoldings } from "./state/actions/statistics";

function App() {
  const dispatch = useAppDispatch();

  //Fetch holdings z databáze
  useEffect(() => {
    dispatch(getHoldings());
  }, [dispatch]);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
