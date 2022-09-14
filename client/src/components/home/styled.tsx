import styled from "styled-components";
import { centerItems } from "../../common/theme";

export const StyledHomePage = styled.div`
  display: flex;

  justify-content: center;

  h1 {
    font-size: 70px;
  }
  .home-container {
  }
  .home-hav {
  }

  .home-dashboard {
    display: flex;

    justify-content: center;
    width: 60%;
    border: 2px solid red;
    span {
      display: inline-block;
      width: 20%;
      border: 1px solid green;
    }

    border: 1px solid black;
  }
`;

export const StyledDashboardItem = styled.div``;
export const StyledDashboard = styled.div``;
