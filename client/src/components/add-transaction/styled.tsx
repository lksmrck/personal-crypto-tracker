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

  /*  .select-name {
    color: red;
    font-size: 20px;
  } */

  .form {
    margin-top: 2%;
    width: 550px;
    height: 500px;
    /*  border: 2px red solid; */
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

    /*     border: 1px red solid; */
  }
  .buttons-container {
    width: 100%;
    ${centerItems}/* border: 1px red solid; */
    /*   margin-left: -10%; */
  }
  .sell-amount-check {
    color: red;
    font-size: 13px;
  }
`;

export const StyledCryptoName = styled.span`
  margin-left: 10px;
`;
export const StyledTransactionType = styled.div`
  width: 100%;
  /*  border: 3px solid green; */

  .select-transaction-type {
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: 1px solid blue; */
  }
  .select-transaction-type > * {
    width: 100px;
  }
`;
