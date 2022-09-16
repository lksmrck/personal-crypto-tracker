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

    width: 100%;
    border: 2px solid red;

    border: 1px solid black;
  }
`;

export const StyledDashboardItem = styled.div`
  width: 100%;
  .transactions-title {
    background-color: antiquewhite;
    font-weight: bold;
    width: 100%;
    border: 1px solid red;
  }
  span {
    display: inline-block;
    width: 20%;
  }
`;
export const StyledDashboard = styled.div`
  width: 100%;
`;
