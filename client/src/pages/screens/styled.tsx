import styled from "styled-components";
import { centerItems } from "../../common/theme";

export const StyledNeedToLogin = styled.div`
  height: 100%;
  margin-top: 15%;
  ${centerItems}
  .container {
    display: flex;
    flex-direction: column;
  }
  .container > * {
    margin: 0.5rem;
  }
  @media only screen and (max-width: 615px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const StyledErrorScreen = styled.div`
  padding-top: 20%;
  height: 100%;
  ${centerItems}
  .container {
    display: flex;
    flex-direction: column;
    margin-top: -20%;
  }
  .container > * {
    margin: 0.5rem;
  }
`;
