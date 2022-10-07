import styled from "styled-components";
import { centerItems, theme } from "../../common/theme";

export const StyledAddTransaction = styled.div`
  .button-container {
    margin-top: 2%;
    ${centerItems}
  }

  .select-transaction-type {
    margin: 5% 0 5% 20%;
  }

  .select-crypto {
    min-width: 200px;
  }

  button {
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  height: 500px;

  .select-name {
    color: red;
    font-size: 20px;
  }

  .form {
    ${centerItems};
    margin-top: 2%;
    width: 550px;
    height: 400px;
    /* border: 2px red solid; */
    border-radius: ${theme.borderRadius};
    ${theme.boxShadow}
    background-color: white;
    button {
      margin: 2%;
      margin-top: 4%;
    }
  }
  .buttons-container {
    display: flex;

    margin-left: -10%;
  }
`;

export const StyledCryptoName = styled.span`
  margin-left: 10px;
`;
