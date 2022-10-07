import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledTransactionHistory = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;

  .transactions-container {
    width: 60%;

    ${theme.boxShadow}
    border-radius: ${theme.borderRadius};
    span {
      display: inline-block;
      width: 20%;
    }
  }
  .no-transaction-found {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
    button {
      margin: 2%;
    }
  }
`;

export const TransactionsWrapper = styled.div`
  .transactions-buy {
    background-color: #2bc361;
    /* &:hover {
      background-color: green;
    } */
  }
  /* &.transactions-buy:hover {
    background-color: blue;
  } */

  .transactions-sell {
    background-color: #da6987;
  }
  /*   .transactions-sell:hover {
    background-color: red;
  } */
`;
