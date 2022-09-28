import { StyledTransactionItem } from "./styled";
import { useSelector } from "react-redux";
import { Transaction } from "../../common/modelTypes";
import { RootState } from "../..";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { intlNumberFormat } from "../../utils/number-format";
import { firstLetterCapitalized } from "../../utils/text-format";

export default function TransactionItem() {
  const transactions = useAppSelector((state: RootState) => state.transactions);

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
          <div
            className={
              transaction.transactionType === "buy"
                ? "transaction-buy"
                : "transaction-sell"
            }
          >
            <span>{transaction.id}</span>
            <span className="transaction-name">
              {firstLetterCapitalized(transaction.name)}
            </span>
            <span>{intlNumberFormat(transaction.price, "usd")}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.transactionType}</span>
          </div>
        );
      })}
    </StyledTransactionItem>
  );
}
