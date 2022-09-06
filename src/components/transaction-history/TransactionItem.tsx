import { StyledTransactionItem } from "./styled";

export default function TransactionItem() {
  return (
    <StyledTransactionItem>
      <span>Number</span>
      <span>Name</span>
      <span>Price</span>
      <span>Amount</span>
      <span>TransactionType</span>
    </StyledTransactionItem>
  );
}
