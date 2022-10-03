import TransactionItem from "./TransactionItem";
import { StyledTransactionHistory } from "./styled";
import TransactionsTable from "./TransactionsTable";

export default function TransactionHistory() {
  return (
    <StyledTransactionHistory>
      <div className="transactions-container">
        {/* <TransactionItem /> */}
        <TransactionsTable />
      </div>
    </StyledTransactionHistory>
  );
}
