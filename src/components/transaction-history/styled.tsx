import styled from "styled-components";

export const StyledTransactionHistory = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  .transactions-container {
    width: 60%;
    border: 2px solid red;
    span {
      display: inline-block;
      width: 20%;
      border: 1px solid green;
    }
  }
`;

export const StyledTransactionItem = styled.div`
  .transactions-title {
    background-color: purple;
    color: white;
    font-weight: bold;
  }

  .transaction-buy {
    background-color: green;
  }
  .transaction-sell {
    background-color: orange;
  }
`;
