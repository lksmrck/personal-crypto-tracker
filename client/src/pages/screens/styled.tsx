import styled from "styled-components";
import { centerItems } from "../../common/theme";
import somethingWrong from "../../assets/somethingWrong.png";

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
`;

export const StyledErrorScreen = styled.div`
  height: 100vh;
  ${centerItems}
  background-color: white;
  .container {
    display: flex;
    flex-direction: column;
    margin-top: -20%;
  }
  .container > * {
    margin: 0.5rem;
  }
`;
