import TransactionItem from "./TransactionItem";
import { StyledTransactionHistory } from "./styled";

export default function TransactionHistory() {
  return (
    <StyledTransactionHistory>
      <div className="transactions-container">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </div>
    </StyledTransactionHistory>
  );
}
