import { StyledTransactionItem } from "./styled";
import { useSelector } from "react-redux";
import { Transaction } from "../../store/transactions-slice";
import { RootState } from "../../store";

export default function TransactionItem() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  return (
    <StyledTransactionItem>
      <div className="transactions-title">
        <span>Number</span>
        <span>Name</span>
        <span>Price</span>
        <span>Amount</span>
        <span>TransactionType</span>
      </div>
      {transactions.map((transaction: Transaction) => {
        return (
          <>
            <span>{transaction.id}</span>
            <span>{transaction.name}</span>
            <span>{transaction.price}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.transactionType}</span>
          </>
        );
      })}
    </StyledTransactionItem>
  );
}
