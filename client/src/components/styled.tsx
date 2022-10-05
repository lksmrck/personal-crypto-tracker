import styled from "styled-components";
import { centerItems } from "../common/theme";
export const StyledNeedToLogin = styled.div`
  height: 85vh;
  ${centerItems}
  .container {
    display: flex;
    flex-direction: column;
  }
  .container > * {
    margin: 0.5rem;
  }
`;
