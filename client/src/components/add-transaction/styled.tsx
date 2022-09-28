import styled from "styled-components";
import { centerItems, theme } from "../../common/theme";

export const StyledAddTransaction = styled.div`
  .button-container {
    margin-top: 2%;
    ${centerItems}
  }

  button {
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  border: 2px black solid;
  height: 400px;

  .select-name {
    color: red;
    font-size: 20px;
  }

  .form {
    ${centerItems};
    margin-top: 20px;
    width: 500px;
    /* border: 2px red solid; */
    border-radius: 15px;
    height: 350px;
    box-shadow: ${theme.cardShadow};
    background-color: white;
  }
`;

export const StyledCryptoName = styled.span`
  margin-left: 10px;
`;
