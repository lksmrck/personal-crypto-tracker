import styled from "styled-components";
import {
  centerItems,
  theme,
  positiveChange,
  negativeChange,
} from "../../common/theme";

export const StyledHomePage = styled.div`
  display: flex;

  justify-content: center;

  h1 {
    font-size: 70px;
  }
  a {
    text-decoration: none;
  }
  .home-container {
  }
  .home-hav {
  }
  .buttons-container {
    display: flex;
    ${centerItems}
    button {
      margin: 2%;
    }
    margin-bottom: 2%;
  }

  .home-dashboard {
    display: flex;

    width: 100%;
  }
`;

export const StyledDashboard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
`;

export const DashboardWrapper = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: ${theme.cardShadow};
  border-radius: ${theme.borderRadius};

  .positive-change {
    ${positiveChange}
    cursor:default
  }
  .negative-change {
    ${negativeChange}
    cursor:default
  }
  .coin-name {
    font-weight: bold;
    cursor: default;
  }
  .coin-price {
    font-weight: bold;
    cursor: default;
  }
  .coin-ticker {
    color: grey;
    cursor: default;
  }
  .default {
    cursor: default;
  }
`;
