import { StyledTransactionHistory } from "./styled";
import TransactionsTable from "./TransactionsTable";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { RootState } from "../..";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormContext from "../../state/FormContext";
import DashboardContext from "../../state/DashboardContext";
import { getTransactions } from "../../state/actions/transactions";
import { lsUserId } from "../../utils/ls-userId";

export default function TransactionHistory() {
  const transactions = useAppSelector((state: RootState) => state.transactions);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const formContext = useContext(FormContext);
  const dashboardContext = useContext(DashboardContext);
  const userId = lsUserId();

  //fetch z mongoDB + fetch dashboard data
  useEffect(() => {
    dispatch(getTransactions(userId));
    dashboardContext?.getDashboardData();
  }, [dispatch]);

  const onClickButton = () => {
    history.push("/holdings");
    formContext?.setFormShown(true);
    formContext?.setSelectedCrypto("Bitcoin");
  };

  return (
    <StyledTransactionHistory>
      {transactions.length > 0 ? (
        <div className="transactions-container">
          <TransactionsTable />
        </div>
      ) : (
        <div className="no-transaction-found">
          <h1>No transactions found. Please add one.</h1>
          <Button variant="contained" onClick={onClickButton}>
            Add transaction
          </Button>
        </div>
      )}
    </StyledTransactionHistory>
  );
}
