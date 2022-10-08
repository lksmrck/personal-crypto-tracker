import styled from "styled-components";
import { centerItems } from "../../common/theme";
export const StyledNeedToLogin = styled.div`
  height: 60vh;
  ${centerItems}
  .container {
    display: flex;
    flex-direction: column;
  }
  .container > * {
    margin: 0.5rem;
  }
`;

export const StyledErrorScreen = styled.div`
  height: 60vh;
  ${centerItems}
  .container {
    display: flex;
    flex-direction: column;
  }
  .container > * {
    margin: 0.5rem;
  }
`;
