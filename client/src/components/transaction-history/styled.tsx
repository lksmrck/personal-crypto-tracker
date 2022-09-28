import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledTransactionHistory = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;

  .transactions-container {
    width: 60%;

    box-shadow: ${theme.cardShadow};
    border-radius: ${theme.borderRadius};
    span {
      display: inline-block;
      width: 20%;
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
    background-color: #2bc361;
  }
  .transaction-sell {
    background-color: #da6987;
  }
  .transaction-name {
    font-weight: bold;
  }
`;
