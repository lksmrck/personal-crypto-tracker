import styled from "styled-components";
import { centerItems, theme } from "../../common/theme";

export const StyledAddTransaction = styled.div`
  .button-container {
    margin-top: 2%;
    ${centerItems}
  }
  .select-crypto {
    min-width: 200px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  height: 550px;

  .form {
    margin-top: 2%;
    width: 450px;
    height: 400px;
    border-radius: ${theme.borderRadius};
    ${theme.boxShadow};
    ${centerItems};
    background-color: white;
    button {
      margin: 2%;
      margin-top: 4%;
    }
  }
  .form-data-container {
    width: 100%;

    ${centerItems};
    flex-direction: column;
  }
  .buttons-container {
    width: 100%;
    ${centerItems}
  }

  .display {
    color: red;
    font-size: 13px;
  }
  .hide {
    display: none;
  }
`;

export const StyledCryptoName = styled.span`
  margin-left: 10px;
`;
export const StyledTransactionType = styled.div`
  width: 100%;
  .select-transaction-type {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .select-transaction-type > * {
    width: 100px;
  }
`;
